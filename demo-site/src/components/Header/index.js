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
  Moralis.initialize("mQR7k1NobAMkMfqKdgIQowcepJpSPcOTCNn2Ds8f");

  const [accountVerified, setAccountVerified] = useState(true);

  const user = Moralis.User.current();

  const handleSubmit = (e) => {
    alert();
  };

  return (
  <>
      <header className={styles.header}>
        <div className={cn("container", styles.container)}>
          <Link className={styles.logo} to="/">
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
                  <NavLink to="/home" className={styles.navlinks} id="home">
                    <span className={styles.headertitles}>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/marketplace" className={styles.navlinks}>
                    <span>Marketplace</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={styles.navlinks}>
                    <span>About</span>
                  </NavLink>
                </li>
                <li>
                    <NavLink to="/item" className={styles.navlinks}>
                      <span>Leaderboard</span>
                    </NavLink>
                </li>
              </ul>
              <div className={styles.link}>
                <ul className={styles.mobileview}>
                  <li>
                    <NavLink to="/profile" className={styles.navlinks}>
                      <span>Profile</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            <Link
              className={cn("button-small", styles.button)}
              to="/upload-variants"
            >
              Upload
            </Link>
          </div>
          <Notification className={styles.notification} />
          <ConnectAndLogout />
          {/* <Link
            className={cn("button-stroke button-small", styles.button)}
            to="/connect-wallet"
          >
            Connect Wallet
          </Link> */}
          <DynamicUser />
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
