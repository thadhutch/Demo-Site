import React, { useState, useEffect, useRef, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import DynamicUser from "../User/DynamicUser"
import { UserContext } from "../../../GlobalState";

import './newDropdown.css';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';


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

function DropdownMenu() {
  const { username } = useContext(UserContext);

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {

    return (
      <a href={props.link} className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (

    <>
      <div className="dropdownP" style={{ height: "500px" }} ref={dropdownRef}>

        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
          <div className="menuTop">
            <DropdownItem><h1>565523ddgfds...3324</h1></DropdownItem>
            <DropdownItem><h4>@Username</h4></DropdownItem>
            <DropdownItem rightIcon={<ChevronIcon />}><h1>$SP Balance</h1><p>38k SP</p></DropdownItem>
            <DropdownItem rightIcon={<ChevronIcon />} ><h1>Eth Balance</h1><p>2.07 Eth</p></DropdownItem>
            <DropdownItem rightIcon={<ChevronIcon />} ><h1>Voting Power</h1><p>83k</p></DropdownItem>
            <DropdownItem ><h1>Add Funds</h1></DropdownItem>
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
            <DropdownItem link={"/user/" + username}>My Profile</DropdownItem>
            <DropdownItem >Saved</DropdownItem>
            <DropdownItem >Manage Funds</DropdownItem>
            <DropdownItem >Settings</DropdownItem>
            <DropdownItem >Sign Out</DropdownItem>
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
