import User from "./index";
import React, { useState, useEffect, useContext } from "react";
import { useMoralis } from "react-moralis";
import styles from './User.module.sass';
import { UserContext } from '../../../GlobalState/user'

function DynamicUser() {

    const Moralis = require('moralis'); 
    Moralis.initialize("5BQEzo7yhMp4zrM9RIdJ7S6leAkE5BFDtLMp3QPv"); 

   const user = Moralis.User.current();

   const { isUserAuthenticated } = useContext(UserContext);


    

    if (isUserAuthenticated) {
        const profileAvatar = user.get("profile_picture");

        return (
            <User 
            ProfilePic={profileAvatar.url()}
            className={styles.user}/>
        );
    
    } else {
        return (
            <User 
                ProfilePic={"/images/content/logo.png"}
                className={styles.user}/>
        );
    };

}
export default DynamicUser;
