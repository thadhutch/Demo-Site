import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./CreateAccount.module.sass";
import Icon from "../../components/Icon";
import Modal from "../../components/Modal/index";
import LoadingModal from "../../components/LoadingModal/index";
import VerifyEmail from "../../components/emailModal ";
import Error from "../../components/Error/index";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../GlobalState";
import Checkbox from "../../components/Checkbox";
import { useMoralis } from "react-moralis";
import Image from "../../components/Image"





const CreateAccount = () => {

  const Moralis = require('moralis');
  Moralis.initialize("mQR7k1NobAMkMfqKdgIQowcepJpSPcOTCNn2Ds8f");


  const user = Moralis.User.current();

  const { logout } = useMoralis();


  const { setUserAuthenticated} = useContext(UserContext);


  const [profileRequirementsChecker, setProfileRequirementsChecker] = useState(false);



  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleErrorModal, setVisibleErrorModal] = useState(false);
  const [visibleEmailModal, setVisibleEmailModal] = useState(false);


  const [loadingMessage, setLoadingMessage] = useState("Authenticating through MetaMask");
  const [errorMessage, setErrorMessage] = useState("Authentication has been cancelled");

  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const [authenticationChecker, setAuthenticationChecker] = useState(true);
  const [accountVerified, setAccountVerified] = useState(true);

  const [collector, setCollector] = useState(true);
  const [artist, setArtist] = useState(false);

  const [conditions, setConditions] = useState(false);

  const usernamePreview = document.getElementById("usernamePreview");
  const bioPreview = document.getElementById("bioPreview");
  const namePreview = document.getElementById("namePreview");

  const modalClose = () => {
    setVisibleModal(false);
  };

  const handleToggle = () => {
    setCollector(true);
    setArtist(false);
  };

  const handleToggle1 = () => {
    setArtist(true);
    setCollector(false);
  };

  async function MetaMaskAuthentication() {

    try {
      setVisibleModal(true);
      setLoadingMessage("Authenticating through MetaMask, if nothing happens please click the MetaMask extension.")
      Moralis.Web3.getSigningData = () => 'Welcome to SpacePath Marketplace! Please sign in to create an account.';
      await Moralis.Web3.authenticate().then((user) => {
        try {
          if (user) {
            const accountStatus = user.get("accountVerified");
            setAccountVerified(accountStatus);
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
            const accountStatus = user.get("accountVerified");
            setAuthenticationChecker(false);
            setAccountVerified(accountStatus);
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

      const user = Moralis.User.current();

      if(user){
        const accountStatus = user.get("accountVerified");
        setAccountVerified(accountStatus);
      } else {
        setAccountVerified(false);
      }
    
      if(username.length === 0){
        setProfileRequirementsChecker(false)
      } else if(displayName.length === 0) {
        setProfileRequirementsChecker(false)
      } else if(email.length === 0) {
        setProfileRequirementsChecker(false)
      } else {
        setProfileRequirementsChecker(true);
      };
  

    if(username.length > 0){
      user.set("username", username);
      usernamePreview.innerHTML = username;
    };
    if(displayName.length > 0){
      user.set("display_name", displayName);
      namePreview.innerHTML = displayName;
    };
    if(email.length > 0){
      user.set("email", email);
    };
    if(bio.length > 0){
      user.set("bio", bio);
      bioPreview.innerHTML = bio;
    };

  }, [displayName, username, bio]);

  const setProfileAvatar = async () => {

    const user = await Moralis.User.current();

    const userAvatarFile = document.getElementById("profileAvatar");

    if (userAvatarFile.files.length > 0) {

      const file = userAvatarFile.files[0];
      const name = "avatar";

      const profilePictureFile = new Moralis.File(name, file);

      await user.set("profile_picture", profilePictureFile);

      await user.save()

      await user.set("profilePictureChecker", true);

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

  };

const displayError = async () => {    
    
  if(username.length === 0){
    setErrorMessage("Please enter a username");
    setVisibleErrorModal(true);
    return [setVisibleErrorModal, setErrorMessage];
  } else if(displayName.length === 0) {
    setErrorMessage("Please enter a display name");
    setVisibleErrorModal(true);
    return;
  } else if(email.length === 0) {
    setErrorMessage("Please enter an email");
    setVisibleErrorModal(true);
    return;
  };

  await user.set("artist", artist);

  await user.set("password", "spacepath")

  try {
    await user.signUp();
      try {
        if(user){
          setVisibleEmailModal(true);
        };

      } catch {

      }
    } catch (error) {
      if(error.code === 202){
        setVisibleErrorModal(true);
        setErrorMessage("An account already exists with that username.");
      };
      if(error.code === 203){
        setVisibleErrorModal(true);
        setErrorMessage("An account already exists with that email.");
      };

    ;}
};


  return (
    <>
      <Modal visible={visibleModal} onClose={modalClose}>
        <LoadingModal
          loadingMessage={loadingMessage}
        />
      </Modal>
      <Modal visible={visibleEmailModal}  onClose={() => setVisibleEmailModal(false)}>
        <VerifyEmail />
      </Modal>
      <Modal visible={visibleErrorModal} onClose={() => setVisibleErrorModal(false)}>
        <Error
          errorMessage={errorMessage}
        />
      </Modal>
      <div className={cn("section-pt80", styles.section)}>
        <div className={cn("container", styles.container)}>
        <>
        {accountVerified ? ( 
          <>
            <div className={styles.head}>
              <div className={cn("h2", styles.stage)}>Thanks for Making an Account!</div>
            </div>
            <div className={styles.body}>
              <h2 className={styles.verifiedTitle}>Please Click the Button Below to View the Demo</h2>
              <Link to="/home" >
                <button className={cn("button", styles.homebutton)} onClick={() => setUserAuthenticated(true)}>View Demo</button>
              </Link>
            </div>
          </>
            ) : (
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
                    <div className={styles.buttonContainer}>
                      
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
                      <input className={styles.input} id="usernameInput" type='text' placeholder='Username' onChange={e => setUsername(e.target.value)}/>
                      <div className={styles.subcategory}>Enter Your Display Name</div>
                      <input className={styles.input} id="displayNameInput" type='text' placeholder='Display Name' onChange={e => setDisplayName(e.target.value)}/>
                      <div className={styles.subcategory}>Enter Your Email</div>
                      <input className={styles.input} id="emailInput" type='text' placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                      <div className={styles.subcategory}>Enter Your Bio</div>
                      <textarea className={styles.textarea} type='textarea' placeholder='Bio (optional)' onChange={e => setBio(e.target.value)}/>
                      <div className={styles.row}>
                          <div className={styles.col}>
                            <button className={styles.accountType} type="button" style={{background: collector ? 'linear-gradient(to right, #f55a00 0%, #ff1c59 51%, #ad1177 100%)' : ""}} onClick={handleToggle} >
                                <Image
                                src="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/iconmonstr-layer-22-240.png?alt=media&token=fb7d1811-3312-4932-95d3-d2c0ce245643"
                                srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/iconmonstr-layer-22-240%20(1).png?alt=media&token=2e25c667-cc29-4e79-9b2d-9e046673005c"
                                alt="Fixed Price Icon"
                                />
                                <div>Collector</div> 
                            </button>
                          </div>
                          <div className={styles.col}>
                            <button className={styles.accountType} type="button" style={{background: artist ? 'linear-gradient(to right, #f55a00 0%, #ff1c59 51%, #ad1177 100%)' : ""}} onClick={handleToggle1}>
                              <Image 
                              src="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/iconmonstr-paintbrush-7-240%20(2).png?alt=media&token=bbc0fc47-de30-4086-b604-54f76c080623"
                              srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/iconmonstr-paintbrush-7-240%20(1).png?alt=media&token=8890bbf7-8a65-42fe-81ff-d443b2492c78"
                              alt="Artist Icon"
                              />
                              <div>Artist</div>
                            </button>
                          </div>
                      </div>
                      <div className={styles.item}>
                        <div className={cn("h3", styles.tostitle)}>Terms of Service</div>
                        <div className={styles.text}>
                          Please take some time to read and understand{" "}
                          <span>SpacePath's <a className={styles.toslink} href="/#">Terms of Service</a> {" "} and {" "} <a className={styles.toslink} href="/#">Privacy Policy</a></span>. To continue to the demo, you’ll need
                          to accept our terms of service and privacy policy.
                        </div>
                        <>
                          {conditions ? ( 
                            <>
                            <div className={styles.variants}>
                                <Checkbox
                                className={styles.checkbox}
                                value={conditions}
                                onChange={() => setConditions(!conditions)}
                                content="I agree to SpacePath's Terms of Service and Privacy Policy"
                                />
                                </div>
                                <div className={styles.btns}>
                                <Link to='/'>
                                    <button className={cn("button-stroke", styles.button)} id={styles.cancelbutton}>
                                    Cancel
                                    </button>
                                </Link>
                                <Link to='/'>
                                    <button className={cn("button", styles.button)} onClick={displayError}>
                                        Create Profile
                                    </button>
                                </Link>
                            </div>
                            </>
                          ) : (
                            <>
                            <div className={styles.variants}>
                                  <Checkbox
                                  className={styles.checkbox}
                                  value={conditions}
                                  onChange={() => setConditions(!conditions)}
                                  content="I agree to SpacePath's Terms of Service and Privacy Policy"
                                  />
                              </div>
                              <div className={styles.btns}>
                                  <button className={cn("button-stroke", styles.button)} id={styles.cancelbutton} onClick={() => logout()}>
                                  Cancel
                                  </button>
                            </div>
                            </>
                          )}
                        </>
                      </div>
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
                                    <h6 className={styles.bioPreview} id="bioPreview">Welcome to SpacePath's demo! Thank you for making an account and supporting our project. #FollowThePath</h6>
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
              )}
            </>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
