import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { NavLink, Link } from "react-router-dom";
import styles from "../Header.module.sass";
import "./newDropdown.css";
import Image from "../../Image";
// import ListIcon from './listIcon.png'

import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";

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

function CommunityNav() {
  return (
    <NavItem icon={<CaretIcon />} navLink="Community" >
      <DropdownMenu />
    </NavItem>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.link} onClick={() => setOpen(!open)}>
        <span >{props.navLink}</span>
        <span>{props.icon}</span>
        <div className={styles.imgC}>
        <h1>{props.img}</h1>
        </div>
        {/* <div className="icon-button">{props.icon}</div> */}
      {open && props.children}
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
      <a 
      // target="_blank"
        href={props.itemLinkTag}
        className="menu-item" id={styles.menuItem} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <h1>{props.children}</h1>
      </a>
    );
  }
  return (
    <>
      <div className="dropdownC" id={styles.dropdownC} style={{ height: "250px" }} ref={dropdownRef}>
        <CSSTransition
          in={activeMenu === "main"}
          timeout={500}
          classNames="menu-primary"
          id={styles.menuPrimary}

          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu" id={styles.menu}>
            <div className="menuSocialIcons"  id={styles.menuSocialIcons}>
              <DropdownItem itemLinkTag="https://www.instagram.com/spacepathhq/" children = {socialIcons.Instagram}>
              </DropdownItem>
              <DropdownItem itemLinkTag="https://twitter.com/SpacePathHQ" children = {socialIcons.Twitter}>
              </DropdownItem>
              <DropdownItem itemLinkTag="https://discord.gg/bdUsVc5B" children = {socialIcons.Discord}>
              </DropdownItem>
              <DropdownItem itemLinkTag="https://t.me/spacepathtelegram" children = {socialIcons.Telegram}>
              </DropdownItem>
            </div>
            <DropdownItem itemLinkTag="/about"  children= "About SpacePath" ></DropdownItem>
            <DropdownItem itemLinkTag="/" children= "$SP Token"></DropdownItem>
            <DropdownItem itemLinkTag="/" children= "FAQ"></DropdownItem>
            <DropdownItem itemLinkTag="/"  children= "Contact Us"></DropdownItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "settings"}
          timeout={500}
          classNames="menu-secondary"
          id={styles.menuSecondary}

          unmountOnExit
          onEnter={calcHeight}
        >
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
          in={activeMenu === "animals"}
          timeout={500}
          classNames="menu-secondary"
          id={styles.menuSecondary}

          unmountOnExit
          onEnter={calcHeight}
        >
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
