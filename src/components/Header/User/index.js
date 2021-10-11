import React, { useState } from "react";
import cn from "classnames";
import styles from "./User.module.sass";
import Modal from "../../Modal/index";
import ModalTextTitle from "../../ModalTextTitle";
import { Link } from "react-router-dom";




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
    url: "",
  },
];

const User = ({ className, ...props }) => {
  const [visibleModal, setVisibleModal] = useState(false);

  const [errorMessage, setErrorMessage] = useState("The Profile Feature isn't avaliable in the demo. This feature will be avaliable in the MVP!");


    
    
  return (
    <>
    <Modal visible={visibleModal} onClose={() => setVisibleModal(false)}>
      <ModalTextTitle 
        message={errorMessage}
      />
    </Modal>
      <div className={cn(styles.user, className)}>
        <Link to="#">
        <div className={styles.head} onClick={() => setVisibleModal(false)}>
          <div className={styles.avatar}>
            <img src={props.ProfilePic} id="imgAvatar1" alt="Avatar" />
          </div>
          <div className={styles.wallet}>
            3.0546 <span className={styles.currency}>ETH</span>
          </div>
        </div>
        </Link>
      </div>
   </>
  );
};

export default User;
