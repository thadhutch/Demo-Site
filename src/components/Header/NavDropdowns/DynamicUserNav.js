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
import lines from "../pngwing.com.png";
const socialIcons = {
  Instagram :  <Image
  src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/iconmonstr-instagram-15-240%20(1).png?alt=media&token=8f3379c6-3594-43c2-b071-6fd503982b4c"
  srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/iconmonstr-instagram-15-240.png?alt=media&token=32f17a6d-ca4c-4dba-b42d-a867e18d3432"
  alt="Instagram Logo"
 />,
  Twitter :<Image
  src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/iconmonstr-twitter-5-240%20(1).png?alt=media&token=1e11e3c1-eaa7-4e13-abaf-d1ceb7a2dd9f"
  srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/iconmonstr-twitter-5-240.png?alt=media&token=8c40f101-85ff-412e-a365-33316b67f146"
  alt="Twitter Logo"
 />,
  Discord : <Image
  src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/iconmonstr-discord-5-240%20(1).png?alt=media&token=2ef7d262-5c6b-471e-94c8-674d55a7d572"
  srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/iconmonstr-discord-5-240.png?alt=media&token=365448a8-8542-4bc4-87a6-ee52d2e93de3"
  alt="Discord Logo"
 />,
  Telegram :<Image
  src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/iconmonstr-telegram-5-240%20(1).png?alt=media&token=0dee66ae-5b05-4da9-8958-92203ef114e0"
  srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/iconmonstr-telegram-5-240.png?alt=media&token=1f1318fc-e242-48ef-8eb0-4dc0d8331299"
  alt="Telegram Logo"
 />,
 
 }

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
  
  const dropdownRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const { username } = useContext(UserContext);
  const [userData, setUserData] = useState([]);

  const Moralis = require('moralis');
  Moralis.initialize("7Ku6X8CPeLsTB1hNuxKbkK3zsNXRW9GrRid3wCnD");

  const user = Moralis.User.current();
  const { logout } = useMoralis();
  const handleSubmit = (e) => {
    alert();
  };
  
  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  function DropdownItem(props) {

    return (
      <a href={props.link} className="menu-item" id={styles.menuItem} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        {props.Iconchildren}
        <div className="menuWords" id={styles.menuWords}  >
        <h1>{props.Headerchildren}</h1>
        <h4>{props.PTagchildren}</h4>
        </div>
      </a>
    );
  }
  function DropdownItem2(props) {
    return (
      <a href={props.link} className="menu-item" id={styles.menuItem} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        {props.Iconchildren}
        <div className="menuWords" id={styles.menuWords}  >
        <h1>{props.Headerchildren}</h1>
            {props.rightIcon}
        </div>
      </a>
    );
  }

  function DropdownItemC(props) {
    return (
      <a 
      // target="_blank"
        href={props.itemLinkTag}
        className={styles.menuItemC} id={styles.menuItem} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <h1>{props.children}</h1>
        <h2>{props.leftIcon}</h2>
      </a>
    );
  }
  return (

    <>
      <div className="dropdownP"  id={styles.dropdownP} style={{ height: menuHeight }}          ref={dropdownRef}
>

        <CSSTransition
          style={{ height: "575px" }}
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          id={styles.menuPrimary}
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu" id={styles.menu}>
          <div className="menuTop" id={styles.menuTop}>
          <div className="menuTopTop" id={styles.menuTopTop}>
            <DropdownItem Headerchildren={userData.ethAddress ? userData.ethAddress?.slice(0, 6) + "..." + userData.ethAddress?.slice(userData.ethAddress?.length - 4, userData.ethAddress?.length) : "0XDEA7...IKA9"}></DropdownItem>
            <DropdownItem id={styles.sss}><h4>@{userData.username || "joneslitty77"}</h4></DropdownItem>
            <div className={styles.themeNav}>
                <Theme className={styles.theme}/>
              </div> 
            </div>
            <DropdownItem  Iconchildren={UserIcons.SPIcon} Headerchildren="$SP Balance" PTagchildren="38k SP"></DropdownItem>
            <DropdownItem  Iconchildren={UserIcons.EthIcon} Headerchildren="Balance" PTagchildren="2.07 Eth"></DropdownItem>
            <DropdownItem  Iconchildren={UserIcons.VotingIcon} Headerchildren="Voting Power" PTagchildren="83k"></DropdownItem>
            <button >Add Funds<img src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/mastercardIcon.png?alt=media&token=81286a30-3205-4405-9e6d-88b483014782"/></button>


          </div>
          <div id={styles.menuBottom}>
            <DropdownItem Iconchildren={UserIcons.ProfileIcon} link={"/user/" + username} Headerchildren="Profile"></DropdownItem>
            <DropdownItem2 Iconchildren={UserIcons.SavedIcon} Headerchildren="Saved"></DropdownItem2>
            <DropdownItem2 Iconchildren={UserIcons.FundsIcon} Headerchildren="Manage Funds"></DropdownItem2>
            <DropdownItem2 goToMenu="community"  Iconchildren={UserIcons.SettingsIcon} Headerchildren="Community"></DropdownItem2>
            <Link to="/" onClick={() => logout()}><DropdownItem2 Iconchildren={UserIcons.LogOutIcon} Headerchildren="Sign Out"></DropdownItem2></Link>
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
          style={{ height: "400px" }}
          in={activeMenu === 'community'}
          timeout={500}
          classNames="menu-secondary"
          // id={styles.menuPrimaryExitActive}
          unmountOnExit
          onEnter={calcHeight}>
      <div className="menu" id={styles.menu}>
        <div id={styles.arrowIconMenu}>
              <DropdownItemC goToMenu="main" children={<ArrowIcon/>} leftIcon="Community" />
              </div>
            <div className="menuSocialIcons"  id={styles.menuSocialIcons}>
              <DropdownItemC itemLinkTag="https://www.instagram.com/spacepathhq/" children = {socialIcons.Instagram}>
              </DropdownItemC>
              <DropdownItemC itemLinkTag="https://twitter.com/SpacePathHQ" children = {socialIcons.Twitter}>
              </DropdownItemC>
              <DropdownItemC itemLinkTag="https://discord.gg/bdUsVc5B" children = {socialIcons.Discord}>
              </DropdownItemC>
              <DropdownItemC itemLinkTag="https://t.me/spacepathtelegram" children = {socialIcons.Telegram}>
              </DropdownItemC>
            </div>
            <DropdownItemC itemLinkTag="/about"  children= "About SpacePath" ></DropdownItemC>
            <DropdownItemC itemLinkTag="/" children= "$SP Token"></DropdownItemC>
            <DropdownItemC itemLinkTag="/" children= "FAQ"></DropdownItemC>
            <DropdownItemC itemLinkTag="/"  children= "Contact Us"></DropdownItemC>
          </div>
        </CSSTransition>

        {/* <CSSTransition
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
        </CSSTransition> */}
      </div>
    </>
  );
}

export default DynamicUserNav;
