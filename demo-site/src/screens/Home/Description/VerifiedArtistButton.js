import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Description.module.sass";

function VerifiedArtistButton() {


    const Moralis = require('moralis'); 
     Moralis.initialize("5BQEzo7yhMp4zrM9RIdJ7S6leAkE5BFDtLMp3QPv"); 


    const user = Moralis.User.current();

    
  
    if(user) {

        const setUserStatus = user.get("VerifiedArtist");
        if(setUserStatus===true) {

                return (
                    <>
                        <Link className={cn("button-stroke", styles.button)} to="/upload-details">
                        Create Item
                        </Link> 
                    </>
                );
                }};
        return (
            <>
             </>
        );
    };



;

export default VerifiedArtistButton;