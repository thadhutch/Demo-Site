import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Image from "../Image";
import Notification from "./Notification";
import ConnectAndLogout from "./ConnectAndLogoutButton/ConnectAndLogout";
import DynamicUser from "./User/DynamicUser";
import Input from './Input/Input';
import { useMoralis } from "react-moralis";


const nav = [
  {
    url: "/search01",
    title: "Discover",
  },
  {
    url: "/faq",
    title: "How it works",
  },
  {
    url: "/",
    title: "Token",
  },
  {
    url: "/item",
    title: "Create item",
  },
  {
    url: "/profile",
    title: "Profile",
  },
];




const Headers = () => {

  const [visibleNav, setVisibleNav] = useState(false);

  const Moralis = require('moralis');
  Moralis.initialize("7Ku6X8CPeLsTB1hNuxKbkK3zsNXRW9GrRid3wCnD");

  const [accountVerified, setAccountVerified] = useState(true);

  const user = Moralis.User.current();

  const { logout } = useMoralis();

  const handleSubmit = (e) => {
    alert();
  };

  return (
  <>
      <header className={styles.header}>
        <div className={cn("container", styles.container)}>
          <Link className={styles.logo} to="/home">
            <Image
              className={styles.pic}
              src="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/logo-dark.png?alt=media&token=0dc78010-319d-426b-9dc0-c17db0479ec4"
              srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/logo-light.png?alt=media&token=af5f3049-b42b-4094-956d-f8377f8986bf"
              alt="SpacePath Logo"
            />
          </Link>
          <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>
            <form
                className={styles.search}
                action=""
                onSubmit={() => handleSubmit()}
              >
                <Input />
                <button className={styles.result}>
                  <Icon name="search" size="20" />
                </button>
              </form>
            <nav className={styles.nav}>
              <ul className={styles.link}>
                <li>
                  <NavLink to="/home" className={styles.navlinks} id="home" onClick={() => setVisibleNav(!visibleNav)}>
                    <span className={styles.headertitles}>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/marketplace" className={styles.navlinks} onClick={() => setVisibleNav(!visibleNav)}>
                    <span>Marketplace</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={styles.navlinks} onClick={() => setVisibleNav(!visibleNav)}>
                    <span>About</span>
                  </NavLink>
                </li>
              </ul>
              <div className={styles.link}>
                
              </div>
            </nav>
            <Link
              className={cn("button-small", styles.mobilebutton)}
              to="/"
              onClick={() => logout()}
            >
              Logout
            </Link>
          </div>
          <Notification className={styles.notification} />
          <div className={styles.usercontainer}>
            <ConnectAndLogout />
            {/* <Link
              className={cn("button-stroke button-small", styles.button)}
              to="/connect-wallet"
            >
              Connect Wallet
            </Link> */}
            <DynamicUser />
          </div>
          <button
            className={cn(styles.burger, { [styles.active]: visibleNav })}
            onClick={() => setVisibleNav(!visibleNav)}
          ></button>
        </div>
      </header>
  </>
  );
};

export default Headers;