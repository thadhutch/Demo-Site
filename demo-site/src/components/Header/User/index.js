import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./User.module.sass";



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
  const [visible, setVisible] = useState(false);


    
    
  return (
    <Link to="/profile">
      <div className={cn(styles.user, className)}>
        <div className={styles.head} onClick={() => setVisible(!visible)}>
          <div className={styles.avatar}>
            <img src={props.ProfilePic} id="imgAvatar1" alt="Avatar" />
          </div>
          <div className={styles.wallet}>
            7.00898 <span className={styles.currency}>ETH</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default User;
