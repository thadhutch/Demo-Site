import User from "./index";
import React, { useState, useEffect, useContext } from "react";
import { useMoralis } from "react-moralis";
import styles from './User.module.sass';
import { AvatarContext } from '../../../GlobalState'

function DynamicUser() {

    const Moralis = require('moralis'); 
    Moralis.initialize("5BQEzo7yhMp4zrM9RIdJ7S6leAkE5BFDtLMp3QPv"); 

   const user = Moralis.User.current();

   const { isAvatar } = useContext(AvatarContext);



    

    if (isAvatar) {
        const profileAvatar = user.get("profile_picture");

        return (
            <User 
            ProfilePic={profileAvatar.url()}
            className={styles.user}/>
        );
    
    } else {
        return (
            <User 
                ProfilePic={"https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/logo.png?alt=media&token=be8595a7-f66f-452e-8adc-0628bf912c1a"}
                className={styles.user}/>
        );
    };

}
export default DynamicUser;
