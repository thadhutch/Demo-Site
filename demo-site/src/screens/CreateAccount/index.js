import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./CreateAccount.module.sass";
import Icon from "../../components/Icon";
import Modal from "../../components/Modal/index";
import LoadingModal from "../../components/LoadingModal/index";
import Error from "../../components/Error/index";
import { useMoralis } from "react-moralis";
import React, { useState, useEffect } from "react";




const CreateAccount = () => {

  const Moralis = require('moralis');  
  Moralis.initialize("mQR7k1NobAMkMfqKdgIQowcepJpSPcOTCNn2Ds8f"); 

        
  const { authenticate, isAuthenticated, isAuthenticating} = useMoralis();
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleErrorModal, setVisibleErrorModal] = useState(false);

  const [loadingMessage, setLoadingMessage] = useState("Authenticating through MetaMask");
  const [errorMessage, setErrorMessage] = useState("Authentication has been cancelled");

  const modalClose = () => {
    setVisibleModal(false);
  };

  async function MetaMaskAuthentication() {
    try {
      var user = await authenticate();
      Moralis.Web3.getSigningData = () => 'Welcome to SpacePath Marketplace! Please sign in to create an account.';
    } catch (error) {
      if(error === "Error: MetaMask Message Signature: User denied message signature"){
        setVisibleErrorModal(true);
       };
    } finally {
      if(user){
        setVisibleModal(false);
      } else {
        setVisibleModal(false);
        setVisibleErrorModal(true);
      };
    };
  };

  async function WalletConnectAuthentication() {
    try {
      var user = await Moralis.Web3.authenticate({ provider: "walletconnect" });
      Moralis.Web3.getSigningData = () => 'Welcome to SpacePath Marketplace! Please sign in to create an account.';
    } catch (error) {
     
    } finally {
      if(user){
        setVisibleModal(false);
      } else {
        setVisibleModal(false);
        setVisibleErrorModal(true);
      };
    };
  };

  useEffect(() => {

    if(isAuthenticating){
      setVisibleModal(true);
      setLoadingMessage("Authenticating through MetaMask, if nothing happens please click the MetaMask extension.")
    };
    if(isAuthenticated){
      setVisibleModal(false);
    };
}, [visibleModal, visibleErrorModal, isAuthenticating, isAuthenticated]);



  return (
    <div className={cn("section-pt80", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
            <div className={cn("h2", styles.stage)}>Create Account for Demo Access</div>
        </div>
        
        <div className={styles.body}>
            <div className={styles.menu}>
              <Modal visible={visibleModal} onClose={modalClose}>
                <LoadingModal 
                  loadingMessage={loadingMessage}
                />
              </Modal>
              <Modal visible={visibleErrorModal} onClose={() => setVisibleErrorModal(false)}>
                <Error
                errorMessage={errorMessage}
                />
              </Modal>
              <div
                className={cn( [styles.active] , styles.link)} onClick={MetaMaskAuthentication}
              >
                <div
                  className={styles.icon}
                >
                  <img src='/images/content/MetaMaskLogo.png' alt="MetaMask Logo" />
                </div>
                <span className={styles.title}>MetaMask Wallet</span>
                <div className={styles.arrow}>
                    <Icon name="arrow-next" size="14" />
                </div>
              </div>
              <div
                className={cn( [styles.active] , styles.link)} onClick={WalletConnectAuthentication}
              >
                <div
                  className={styles.icon}
                >
                  <img src='/images/content/WalletConnectLogo.png' alt="Wallet Connect Logo"/>
                </div>
                <span className={styles.title}>Wallet Connect</span>
                <div className={styles.arrow}>
                  <Icon name="arrow-next" size="14" />
                </div>
              </div>
            </div>
          <div>
          </div>
          <div className={styles.wrapper}>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
