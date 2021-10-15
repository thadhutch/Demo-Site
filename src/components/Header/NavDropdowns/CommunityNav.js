import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavLink, Link } from "react-router-dom";
import styles from "../Header.module.sass"
import './newDropdown.css';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';


function CommunityNav() {
  return (
    <NavItem icon={<CaretIcon />} navLink="Community">
    <DropdownMenu/>
      </NavItem>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <NavLink to="#" className={styles.navlinks} id={styles.cDrop} onClick={() => setOpen(!open)}>
      {/* <a href="#" className="icon-button" onClick={() => setOpen(!open)}> */}
      {props.navLink}      
      {props.icon}
      {/* </a> */}
      {open && props.children}
      </NavLink>
    </li>
  );
}

function DropdownMenu() {
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
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <>
      <div className="dropdownC" style={{ height: "250px" }} ref={dropdownRef}>

        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <div className="menuSocialIcons">
            <DropdownItem leftIcon="icon1"></DropdownItem>
            <DropdownItem>icon2</DropdownItem>
            <DropdownItem>icon3</DropdownItem>
            <DropdownItem>icon4</DropdownItem>
            </div>
            <DropdownItem>About SpacePath</DropdownItem>
            <DropdownItem>$SP Token</DropdownItem>
            <DropdownItem>FAQ</DropdownItem>
            <DropdownItem>Contact Us</DropdownItem>

             <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="settings">
              Settings
            </DropdownItem>
           {/* <DropdownItem
              leftIcon="🦧"
              rightIcon={<ChevronIcon />}
              goToMenu="animals">
              Animals
            </DropdownItem> */}

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

export default CommunityNav;
