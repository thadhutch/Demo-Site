import User from "./index";
import React, { useState, useEffect, useContext } from "react";
import { useMoralis } from "react-moralis";
import styles from './User.module.sass';

function DynamicUser() {

    const Moralis = require('moralis'); 
    Moralis.initialize("7Ku6X8CPeLsTB1hNuxKbkK3zsNXRW9GrRid3wCnD"); 
   
    const [ isAvatar, setAvatar] = useState(false);

    const user = Moralis.User.current();

   
   


    

    if (user) {

      const profileAvatar = user.get("profile_picture");
          return (
            <>
              {isAvatar ? ( 
                <User 
                ProfilePic={profileAvatar.url()}
                className={styles.user}/>
              ) : ( 
                  <User 
                  ProfilePic={"https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/logo.png?alt=media&token=be8595a7-f66f-452e-8adc-0628bf912c1a"}
                  className={styles.user}/>
              )}
            </>
          );
    
    } else {
        return (
            <>
            </>
        );
    };

}
export default DynamicUser;
