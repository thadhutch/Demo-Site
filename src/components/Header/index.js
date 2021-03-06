import React, { useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Image from "../Image";
import Notification from "./Notification";
import DynamicUser from "./User/DynamicUser";
import DynamicUserNav from "./NavDropdowns/DynamicUserNav";
import CommunityNav from "./NavDropdowns/CommunityNav";
import CommunityNavMobile from "./NavDropdowns/CommunityNavMobile";
import Input from './Input/Input';
import { useMoralis } from "react-moralis";
import Modal from '../Modal/index';
import Login from '../Login/index';
import ModalTextTitle from '../ModalTextTitle/index';
import LoadingModal from '../LoadingModal/index';
// import ListIcon from './lineIcon.png'
import { style } from "dom-helpers";
import Logo from "./SpacePath.png";
import { UserContext } from "../../GlobalState";

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




const Headers = (className) => {
  const { setUsername, setUserAuthenticated, ethAddress, setEthAddress } = useContext(UserContext);
  const [visibleNav, setVisibleNav] = useState(false);
  const [visibleLoginModal, setVisibleLoginModal] = useState(false);
  const [visibleLogoutModal, setVisibleLogoutModal] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleErrorModal, setVisibleErrorModal] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Authenticating through MetaMask");
  const [errorMessage, setErrorMessage] = useState("Authentication has been cancelled");



  const Moralis = require('moralis');
  Moralis.initialize("7Ku6X8CPeLsTB1hNuxKbkK3zsNXRW9GrRid3wCnD");

  const user = Moralis.User.current();

  const { logout } = useMoralis();

  const handleSubmit = (e) => {
    alert();
  };

  function handleLogout() {
    setUsername(null);
    setEthAddress(null);
    setUserAuthenticated(false);
    logout();
  }



  async function MetaMaskAuthentication() {
    const user = Moralis.User.current();
    try {
      setVisibleModal(true);
      setLoadingMessage("Authenticating through MetaMask, if nothing happens please click the MetaMask extension.")
      Moralis.Web3.getSigningData = () => 'Welcome to SpacePath Marketplace! Please sign in to create an account.';
      await Moralis.Web3.authenticate().then((user) => {
        console.log(user)
        if (user) {
          setUsername(user.attributes.username);
          setUserAuthenticated(true);
          setEthAddress(user.attributes.ethAddress);
          setVisibleModal(false);
          setVisibleLoginModal(false);
        } else {
          setVisibleErrorModal(true);
        };
      })
    } catch (error) {
      if (error.code === 4001) {
        setVisibleErrorModal(true);
        setVisibleModal(false);
      };
    }
  };

  async function WalletConnectAuthentication() {
    const user = Moralis.User.current();

    try {
      setVisibleModal(true);
      setLoadingMessage("Authenticating through WalletConnect");
      Moralis.Web3.getSigningData = () => 'Welcome to SpacePath Marketplace! Please sign in to create an account.';
      await Moralis.Web3.authenticate({ provider: "walletconnect" }).then((user) => {

        try {
          if (user) {
            setVisibleModal(false);
            setUsername(user.attributes.username);
            setUserAuthenticated(true);
            setEthAddress(user.attributes.ethAddress);
          } else {
            setVisibleErrorModal(true);
            setVisibleModal(false);
          };
        } catch (error) {
          if (error) {
            setVisibleErrorModal(true);
            setVisibleModal(false);
          };
        };

      })
    } catch (error) {
      let a = error;
      if (a.toString() === "Error: User closed modal") {
        setVisibleErrorModal(true);
        setVisibleModal(false);
      }
    };
  };

  useEffect(() => {

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE');
      }
    });

  }, []);

  return (
    <>
      <Modal visible={visibleLoginModal} onClose={() => setVisibleLoginModal(false)}>
        <div className={cn(className, styles.transfer)}>
          <div className={cn("h4", styles.menumodal)}>
            <h1>Wallet Login</h1>
            <div
              className={cn([styles.active], styles.linkmodal)} onClick={MetaMaskAuthentication}
            >
              <div
                className={styles.iconmodal}
              >
                <img src='https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/MetaMaskLogo.png?alt=media&token=5a3825d4-fbe3-49f4-af45-76340fb89e03' alt="MetaMask Logo" />
              </div>
              <span className={styles.titlemodal}>MetaMask Wallet</span>
            </div>
            <div
              className={cn([styles.active], styles.linkmodal)} id="walletconnectauth" onClick={WalletConnectAuthentication}
            >
              <div
                className={styles.iconmodal}
              >
                <img src='https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/WalletConnectLogo.png?alt=media&token=25e3b68d-ac7f-4810-a66c-e4c2d59ba112' alt="Wallet Connect Logo" />
              </div>
              <span className={styles.titlemodal}>Wallet Connect</span>
            </div>
            <div className={styles.buttonContainermodal}>
              <a href="https://www.youtube.com/watch?v=4KL5pZPt67g" target="_blank" rel="noopener noreferrer">
                <button className={cn("button", styles.helpbuttonmodal)}>Wallet Download Tutorial</button>
              </a>
            </div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.text}>
            </div>
          </div>
        </div>
      </Modal>
      <Modal visible={visibleLogoutModal} onClose={() => setVisibleLogoutModal(false)}>
        <ModalTextTitle title={"Success!"} message={"You have signed out."} />
      </Modal>
      <Modal visible={visibleErrorModal} onClose={() => setVisibleErrorModal(false)}>
        <ModalTextTitle title={"Error"} message={errorMessage} />
      </Modal>
      <Modal visible={visibleModal} onClose={() => setVisibleModal(false)}>
        <LoadingModal
          loadingMessage={loadingMessage} />
      </Modal>
      {/* <div className={styles.container}> */}
      {/* <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}> */}
      {/* <form
              className={styles.search}
              action=""
              onSubmit={() => handleSubmit()}
              >
              <Input />
              <button className={styles.result}>
              <Icon name="search" size="20" />
              </button>
            </form> */}
      {/* <nav className={styles.nav, { [styles.active]: visibleNav }}> */}
      <nav className={styles.nav}>
        <div className={styles.LogoLinkContainer}>
        <Link className={styles.logo} to="/">
          <Image
            className={styles.pic}
            src="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/logo-dark.png?alt=media&token=0dc78010-319d-426b-9dc0-c17db0479ec4"
            srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/logo-light.png?alt=media&token=af5f3049-b42b-4094-956d-f8377f8986bf"
            alt="SpacePath Logo"
          />
          <Image
            className={styles.pic2}
            src={Logo}
            srcDark={Logo}
            alt="SpacePath Logo"
          />
        </Link>

        <div className={styles.navLinksContainer}>
          <ul className={styles.navLinks}>
            <NavLink to="/" className={styles.link} id="home" onClick={() => setVisibleNav(!visibleNav)}>
              Home
            </NavLink>
            
            <NavLink to="/marketplace" className={styles.link} onClick={() => setVisibleNav(!visibleNav)}>
              Marketplace
            </NavLink>
            <NavLink to="/about" className={styles.link} onClick={() => setVisibleNav(!visibleNav)}>
              About
            </NavLink>
            <CommunityNav />
          </ul>
        </div>
        </div>
        <>
          {user ? (
            <Link className={cn("button-small", styles.mobilebutton)} to="/" onClick={() => handleLogout()}>
              Logout
            </Link>
          ) : (
            <Link className={cn("button-small", styles.mobilebutton)} to="/" onClick={() => setVisibleLoginModal(true)}>
              Connect Wallet
            </Link>
          )}
        </>
        <div className={styles.usercontainer}>
          {user ? (
            <>
            </>
          ) : (
            <button id={styles.walletBtn}
              className={cn("button-small", styles.button)}
              onClick={() => setVisibleLoginModal(true)}
            >
              Connect Wallet
            </button>
          )}
          {user ? (
            <DynamicUserNav />
          ) : (
            <>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Headers;
