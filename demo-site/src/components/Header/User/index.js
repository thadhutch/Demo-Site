import React, { useEffect, useState } from "react";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./User.module.sass";
import Modal from "../../Modal/index";
import Error from "../../Error";




const items = [
  {
    title: "My profile",
    icon: "user",
    url: "/profile",
  },
  {
    title: "My items",
    icon: "image",
    url: "/item",
  },
  {
    title: "Dark theme",
    icon: "bulb",
  },
  {
    title: "Disconnect",
    icon: "exit",
    url: "https://ui8.net/ui8/products/crypter-nft-marketplace-ui-kit",
  },
];

const User = ({ className, ...props }) => {
  const [visibleModal, setVisibleModal] = useState(false);

  const [errorMessage, setErrorMessage] = useState("The Profile Feature isn't avaliable in the demo. This feature will be avaliable in the MVP!");


    
    
  return (
    <>
    <Modal visible={visibleModal} onClose={() => setVisibleModal(false)}>
      <Error 
        errorMessage={errorMessage}
      />
    </Modal>
      <div className={cn(styles.user, className)}>
        <div className={styles.head} onClick={() => setVisibleModal(true)}>
          <div className={styles.avatar}>
            <img src={props.ProfilePic} id="imgAvatar1" alt="Avatar" />
          </div>
          <div className={styles.wallet}>
            7.00898 <span className={styles.currency}>ETH</span>
          </div>
        </div>
      </div>
   </>
  );
};

export default User;
