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


  const user = Moralis.User.current();


  const { authenticate, isAuthenticated, isAuthenticating, isLoggingOut } = useMoralis();
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleErrorModal, setVisibleErrorModal] = useState(false);

  const [loadingMessage, setLoadingMessage] = useState("Authenticating through MetaMask");
  const [errorMessage, setErrorMessage] = useState("Authentication has been cancelled");

  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");

  const [authenticationChecker, setAuthenticationChecker] = useState(true);

  const usernamePreview = document.getElementById("usernamePreview");
  const bioPreview = document.getElementById("bioPreview");
  const namePreview = document.getElementById("namePreview");

  const modalClose = () => {
    setVisibleModal(false);
  };

  async function MetaMaskAuthentication() {

    try {
      setVisibleModal(true);
      setLoadingMessage("Authenticating through MetaMask, if nothing happens please click the MetaMask extension.")
      Moralis.Web3.getSigningData = () => 'Welcome to SpacePath Marketplace! Please sign in to create an account.';
      await Moralis.Web3.authenticate().then((user) => {
        try {
          if (user) {
            setAuthenticationChecker(false);
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

    try {
      setVisibleModal(true);
      setLoadingMessage("Authenticating through WalletConnect");
      Moralis.Web3.getSigningData = () => 'Welcome to SpacePath Marketplace! Please sign in to create an account.';
      await Moralis.Web3.authenticate({ provider: "walletconnect" }).then((user) => {
        try {
          if (user) {
            setAuthenticationChecker(false);
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


    if(username.length > 0){
      usernamePreview.innerHTML = username;
    };
    if(displayName.length > 0){
      namePreview.innerHTML = displayName;
    };
    if(bio.length > 0){
      bioPreview.innerHTML = bio;
    };

  }, [visibleModal, visibleErrorModal, authenticationChecker, displayName, username, bio]);

  const setProfileAvatar = async () => {

    const user = await Moralis.User.current();

    const userAvatarFile = document.getElementById("profileAvatar");

    if (userAvatarFile.files.length > 0) {
      const file = userAvatarFile.files[0];
      const name = "avatar";

      const profilePictureFile = new Moralis.File(name, file);

      user.set("profile_picture", profilePictureFile);

      await user.save()

      const profileAvatar = await user.get("profile_picture");

      const userProfileAvatar = document.getElementById('imgAvatar');

      userProfileAvatar.src = profileAvatar.url();

    };

  }

  const setProfileBanner = async () => {

    const user = await Moralis.User.current();

    const userProfileBanner = document.getElementById("profileBannerInput");

    if (userProfileBanner.files.length > 0) {
      const file = userProfileBanner.files[0];
      const name = "profile banner";

      const profilePicture = new Moralis.File(name, file);

      user.set("profile_banner", profilePicture);

      await user.save()

      const userAvatar = await user.get("profile_banner");

      const userAvatarImg = document.getElementById('profileBanner');

      userAvatarImg.src = userAvatar.url();

    };

  }




async function saveUser(){   
    
  const user = await Moralis.User.current();

  await user.set("username", username);
  await user.set("display_name", displayName);
  await user.set("bio", bio);
  await user.save();

};

  const query = new Moralis.Query(Moralis.User);

  return (
    <>
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
      <div className={cn("section-pt80", styles.section)}>
        <div className={cn("container", styles.container)}>
        <>
          <div className={styles.head}>
            <div className={cn("h2", styles.stage)}>Create Account for Demo Access</div>
          </div>
          <div className={styles.body}>
              {authenticationChecker ? (
                <>
                  <div className={styles.menu}>

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
                      className={cn([styles.active], styles.link)} onClick={WalletConnectAuthentication}
                    >
                      <div
                        className={styles.icon}
                      >
                        <img src='https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/WalletConnectLogo.png?alt=media&token=25e3b68d-ac7f-4810-a66c-e4c2d59ba112' alt="Wallet Connect Logo" />
                      </div>
                      <span className={styles.title}>Wallet Connect</span>
                    </div>
                  </div>
                </>
              ) : (
                  <>
                    <h2 className={styles.createaccounttitle}>Enter Profile Details</h2>
                    <div className={styles.menu}>
                      <div className={styles.fileUpload}>
                        <div className={styles.uploaditem}>
                          <div className={styles.pagecategory}>Upload Profile Avatar</div>
                          <div className={styles.note}>
                            Drag or choose your file to upload
                          </div>
                          <div className={styles.file}>
                            <input className={styles.load} type="file" id="profileAvatar" onChange={setProfileAvatar} />
                            <div className={styles.uploadicon}>
                              <Icon name="upload-file" size="24" />
                            </div>
                            <div className={styles.format}>
                              PNG, GIF, WEBP, MP4 or MP3. Max 10Mb.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.fileUpload}>
                        <div className={styles.uploaditem}>
                          <div className={styles.pagecategory}>Upload Profile Banner</div>
                          <div className={styles.note}>
                            Drag or choose your file to upload
                          </div>
                          <div className={styles.file}>
                            <input className={styles.load} type="file" id="profileBannerInput" onChange={setProfileBanner} />
                            <div className={styles.uploadicon}>
                              <Icon name="upload-file" size="24" />
                            </div>
                            <div className={styles.format}>
                              PNG, GIF, JPG, MP4 or MP3. Max 10Mb.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.subcategory}>Enter Your Username</div>
                      <input className={styles.input} type='text' placeholder='Username' onChange={e => setUsername(e.target.value)}/>
                      <div className={styles.subcategory}>Enter Your Display Name</div>
                      <input className={styles.input} type='text' placeholder='Display Name' onChange={e => setDisplayName(e.target.value)}/>
                      <div className={styles.subcategory}>Enter Your Bio</div>
                      <textarea className={styles.textarea} type='textarea' placeholder='Bio (optional)' onChange={e => setBio(e.target.value)}/>
                      <Link to='/home'>
                        <button
                          className={cn("button-small", styles.button)} onClick={saveUser}
                        >
                          Create Profile
                          </button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
              <div>
              </div>
              <div className={styles.wrapper}>
                {authenticationChecker ? (
                  <>
                  </>
                ) : (
                  <div className={styles.previewcontainer}>
                  <div className={cn(styles.wrap)}>
                        <div className={styles.inner}>
                          <div className={styles.info}>Profile Card Preview</div>
                          <div className={styles.artistCardContainer}>
                            <div className={styles.artistCardImg}>
                              <img src={"https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/defaultProfileBackground.png?alt=media&token=79e04361-65f6-400d-8527-21220062872d"} id="profileBanner" alt="profile banner" />
                            </div>
                            <div className={styles.artistUsernameAvatarContainer}>
                              <div className={styles.artistUsernameAvatar}>
                                  <div>
                                    <div className={styles.artistAvatar} >
                                      <img src={"https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/logo.png?alt=media&token=be8595a7-f66f-452e-8adc-0628bf912c1a"} id="imgAvatar" alt="Avatar" />
                                    </div>
                                    <div className={styles.realName} id="namePreview">Sample Name</div>
                                    <span>
                                      <h5>@</h5>
                                      <h5 id="usernamePreview">sampleuser</h5>
                                    </span>
                                    <p id="bioPreview">Welcome to SpacePath's demo! Thank you for making an account and supporting our project. #FollowThePath</p>
                                    <button className={cn("button", styles.followerbutton)}>Follow</button>
                                    <div className={styles.followers}>Followers</div>
                                    <div className={styles.followerCount}>0</div>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>
                </div>
                  )}
              </div>
              </>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
