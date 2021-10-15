import React, { useState, useEffect, useRef, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import DynamicUser from "../User/DynamicUser"
import { UserContext } from "../../../GlobalState";
import { useMoralis } from "react-moralis";
import { NavLink, Link } from "react-router-dom";

import './newDropdown.css';
import styles from '../Header.module.sass';
import Theme from "../../Theme";

import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import Image from "../../Image";


const  UserIcons= {
  SPIcon :  <Image
  src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/SPIcon.png?alt=media&token=167d0b03-7f43-465c-ac22-7838795fec22"
  srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/SPIcon.png?alt=media&token=167d0b03-7f43-465c-ac22-7838795fec22"
  alt="Instagram Logo"
 />,
  EthIcon :<Image
  src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/etherIcon.png?alt=media&token=3c167c59-268a-4e15-bfe1-d39f459d0c96"
  srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/etherIcon.png?alt=media&token=3c167c59-268a-4e15-bfe1-d39f459d0c96"

 />,
  VotingIcon : <Image
  src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/votingIcon.png?alt=media&token=b788fd55-ea1a-4d48-a436-4bbbb774cb5f"
  srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/votingIcon.png?alt=media&token=b788fd55-ea1a-4d48-a436-4bbbb774cb5f"

 />,
  MasterCard :<Image
  src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/mastercardIcon.png?alt=media&token=81286a30-3205-4405-9e6d-88b483014782"
  srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/mastercardIcon.png?alt=media&token=81286a30-3205-4405-9e6d-88b483014782"
 />,
  ProfileIcon :<Image
  src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/profileIcon.png?alt=media&token=bca0a17b-7722-4b92-b777-b513e599d550"
  srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/profileIcon.png?alt=media&token=bca0a17b-7722-4b92-b777-b513e599d550"

 />,
  FundsIcon :<Image
  src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/fundsIcon.png?alt=media&token=d5b7ca6b-09f7-4233-b9fa-52332a648583"
  srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/fundsIcon.png?alt=media&token=d5b7ca6b-09f7-4233-b9fa-52332a648583"

 />,
  SettingsIcon :<Image
  src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/settingsIcon-24.png?alt=media&token=c811dffa-b769-478f-b18b-25724e55a0b5"
  srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/settingsIcon-24.png?alt=media&token=c811dffa-b769-478f-b18b-25724e55a0b5"

 />,
  SavedIcon :<Image
  src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/icons8-bookmark-24.png?alt=media&token=95b36422-c14d-4c5d-8f56-31d8c624a12e"
  srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/icons8-bookmark-24.png?alt=media&token=95b36422-c14d-4c5d-8f56-31d8c624a12e"

 />,
  LogOutIcon :<Image
  src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/signOutIcon.png?alt=media&token=91bf1d1a-091d-40e1-a035-d37ef00ebd78"
  srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/signOutIcon.png?alt=media&token=91bf1d1a-091d-40e1-a035-d37ef00ebd78"

 />,
 
 }

function DynamicUserNav() {

  return (
      <NavItem navLink={<DynamicUser/>}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
      {props.navLink}
      </a>
      {open && props.children}
    </>
  );
}

function DropdownMenu(props) {
  const { username } = useContext(UserContext);
  const Moralis = require('moralis');
  const [userData, setUserData] = useState([]);
  const { logout } = useMoralis();
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    getData();
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  async function getData() {
    try {
        const results = await Moralis.Cloud.run("userQuery", { username: props.user });
        setUserData(results[0].attributes);
    } catch (error) {
        // window.location.href = "/";
        console.log(error)
    }
}
  function DropdownItem(props) {

    return (
      <a href={props.link} className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        {props.Iconchildren}
        <div className="menuWords">
        <h1>{props.Headerchildren}</h1>
        <h4>{props.PTagchildren}</h4>
        </div>
      </a>
    );
  }

  return (

    <>
      <div className="dropdownP" style={{ height: "550px" }} ref={dropdownRef}>

        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
          <div className="menuTop">
          <div className="menuTopTop">
            <DropdownItem Headerchildren={userData.ethAddress ? userData.ethAddress?.slice(0, 6) + "..." + userData.ethAddress?.slice(userData.ethAddress?.length - 4, userData.ethAddress?.length) : "0XDEA7...IKA9"}></DropdownItem>
            <DropdownItem PTagchildren="@Username"></DropdownItem>
            <div className={styles.themeNav}>
                <Theme className={styles.theme}/>
              </div> 
            </div>
            <DropdownItem  Iconchildren={UserIcons.SPIcon} Headerchildren="$SP Balance" PTagchildren="38k SP"></DropdownItem>
            <DropdownItem  Iconchildren={UserIcons.EthIcon} Headerchildren="Balance" PTagchildren="2.07 Eth"></DropdownItem>
            <DropdownItem  Iconchildren={UserIcons.VotingIcon} Headerchildren="Voting Power" PTagchildren="83k"></DropdownItem>
            <button>Add Funds<img src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/mastercardIcon.png?alt=media&token=81286a30-3205-4405-9e6d-88b483014782"/></button>
            {/* <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="settings">
              Settings
            </DropdownItem>
            <DropdownItem
              leftIcon="🦧"
              rightIcon={<ChevronIcon />}
              goToMenu="animals">
              Animals
            </DropdownItem> */}

          </div>
          <div className="menuBottom">
            <DropdownItem Iconchildren={UserIcons.ProfileIcon} link={"/user/" + username} Headerchildren="Profile"></DropdownItem>
            {/* <DropdownItem Iconchildren={UserIcons.SPIcon} link="/">Home</DropdownItem> */}
            <DropdownItem Iconchildren={UserIcons.SavedIcon} Headerchildren="Saved"></DropdownItem>
            <DropdownItem Iconchildren={UserIcons.FundsIcon} Headerchildren="Manage Funds"></DropdownItem>
            <DropdownItem Iconchildren={UserIcons.SettingsIcon} Headerchildren="Settings"></DropdownItem>
            <Link to="/" onClick={() => logout()}><DropdownItem Iconchildren={UserIcons.LogOutIcon} Headerchildren="Sign Out"></DropdownItem></Link>
            {/* <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="settings">
              Settings
            </DropdownItem>
            <DropdownItem
              leftIcon="🦧"
              rightIcon={<ChevronIcon />}
              goToMenu="animals">
              Animals
            </DropdownItem> */}

          </div>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === 'settings'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h2>My Tutorial</h2>
            </DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === 'animals'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h2>Animals</h2>
            </DropdownItem>
            <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
            <DropdownItem leftIcon="🐸">Frog</DropdownItem>
            <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
            <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
          </div>
        </CSSTransition>
      </div>
    </>
  );
}

export default DynamicUserNav;
