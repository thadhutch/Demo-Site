import cn from "classnames";
import styles from "./Login.module.sass";
import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import Error from '../Error/index';

const Login = ({ className, ...props }) => {

  const Moralis = require('moralis');
  Moralis.initialize("7Ku6X8CPeLsTB1hNuxKbkK3zsNXRW9GrRid3wCnD");

  const user = Moralis.User.current();


  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleErrorModal, setVisibleErrorModal] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Authenticating through MetaMask");
  const [errorMessage, setErrorMessage] = useState("Authentication has been cancelled");


  async function MetaMaskAuthentication() {
    const user = Moralis.User.current();

    try {
      setVisibleModal(true);
      setLoadingMessage("Authenticating through MetaMask, if nothing happens please click the MetaMask extension.")
      Moralis.Web3.getSigningData = () => 'Welcome to SpacePath Marketplace! Please sign in to create an account.';
      await Moralis.Web3.authenticate().then((user) => {
        try {
          if (user) {
            setVisibleModal(false);
          } else {
            setVisibleErrorModal(true);
          };
        } catch {

        }
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
          window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE');
          if (user) {
            setVisibleModal(false);
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
    <div className={cn(className, styles.transfer)}>
      <div className={cn("h4", styles.menu)}>  
            <h1>Wallet Login</h1>

            <div
              className={cn([styles.active], styles.link)} onClick={MetaMaskAuthentication}
            >
              <div
                className={styles.icon}
              >
                <img src='https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/MetaMaskLogo.png?alt=media&token=5a3825d4-fbe3-49f4-af45-76340fb89e03' alt="MetaMask Logo" />
              </div>
              <span className={styles.title}>MetaMask Wallet</span>
            </div>
            <div
              className={cn([styles.active], styles.link)} id="walletconnectauth" onClick={WalletConnectAuthentication}
            >
              <div
                className={styles.icon}
              >
                <img src='https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/WalletConnectLogo.png?alt=media&token=25e3b68d-ac7f-4810-a66c-e4c2d59ba112' alt="Wallet Connect Logo" />
              </div>
              <span className={styles.title}>Wallet Connect</span>
            </div>
            <div className={styles.buttonContainer}>
              <a href="https://www.youtube.com/watch?v=4KL5pZPt67g" target="_blank" rel="noopener noreferrer">
                <button className={cn("button", styles.helpbutton)}>Wallet Download Tutorial</button>
              </a>
            </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.text}>
        </div>
      </div>
    </div>
  );
};

export default Login;