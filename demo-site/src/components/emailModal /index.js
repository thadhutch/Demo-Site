import React from "react";
import cn from "classnames";
import styles from "./emailModal.module.sass";



const VerifyEmail = ({ className }) => {

  const Moralis = require('moralis');
  Moralis.initialize("mQR7k1NobAMkMfqKdgIQowcepJpSPcOTCNn2Ds8f");


  const user = Moralis.User.current();

  const verifyEmail = async () => {    

   const email = await user.get("email"); 
   const username = await user.get("username"); 

   await Moralis.Cloud.run("sendWelcomeEmail", {email, username});
};
  
    return (
      <div className={cn(className, styles.transfer)}>
        <div className={cn("h4", styles.title)}>Verify Email to gain demo access!</div>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <button
                className={cn("button-stroke", styles.emailbutton)} onClick={verifyEmail}
            >
            Verify Email
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default VerifyEmail;