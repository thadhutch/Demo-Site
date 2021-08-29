import User from "./index";
import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import styles from './User.module.sass';

function DynamicUser() {
    const { isAuthenticated } = useMoralis();

    const Moralis = require('moralis'); 
    Moralis.initialize("5BQEzo7yhMp4zrM9RIdJ7S6leAkE5BFDtLMp3QPv"); 

   
    const [userCheck, setUserCheck] = useState(false);

    async function Authenticated(){
        
        const user = await Moralis.User.current();
        if(user){
            setUserCheck(true);
        }
    };
    Authenticated();

    useEffect(() => {
        if(userCheck){
            setUserCheck(true);
        } else {
            setUserCheck(false);
        };

    }, [userCheck])

    

    if (isAuthenticated) {
        const user = Moralis.User.current();
        const profileAvatar = user.get("profile_picture");

        if(profileAvatar) {
  
        return (
            <User 
            ProfilePic={profileAvatar.url()}
            className={styles.user}/>
        );
    }

        return (
            <User 
                ProfilePic={"/images/content/logo.png"}
                className={styles.user}/>
        );
    };

    return (
        <>
        </>
    );

}
export default DynamicUser;
