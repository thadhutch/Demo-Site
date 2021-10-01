import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Image from "../Image";
import Theme from "../Theme";
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
            {/* <ConnectAndLogout /> */}
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
            {/* <div className={styles.navtheme}>
                <span className={styles.sunicon}>
                <Image 
                    src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/iconmonstr-weather-2-240%20(2).png?alt=media&token=36c037b7-c92b-4522-a12b-a20ee5e9e830"
                    srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/iconmonstr-weather-2-240.png?alt=media&token=54ed330f-02c9-457d-a515-34a9eaf4d0e7"
                    className={styles.sun} 
                    alt="sun icon"
                  />
                </span>
                <Theme className={styles.theme}/>
                <span className={styles.moonicon}>
                  <Image 
                    src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/iconmonstr-weather-115-240%20(1).png?alt=media&token=9f8b72fd-5d7d-4575-8539-affe38d1072f"
                    srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/iconmonstr-weather-115-240.png?alt=media&token=122e0e08-8851-47bd-9eb7-6e58f67a88b3"
                    className={styles.moon} 
                    alt="moon icon"
                  />
                </span>
              </div>  */}
        </div>
      </header>
  </>
  );
};

export default Headers;
