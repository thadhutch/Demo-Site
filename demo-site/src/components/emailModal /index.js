import React, { useState } from "react";
import cn from "classnames";
import styles from "./emailModal.module.sass";



const VerifyEmail = ({ className }) => {

  const Moralis = require('moralis');
  Moralis.initialize("mQR7k1NobAMkMfqKdgIQowcepJpSPcOTCNn2Ds8f");

  const [emailTitle, setEmailTitle] = useState("Verify Email to gain demo access!");
  const [buttonText, setButtonText] = useState("Verify Email");
  const [sent, setSent] = useState(false);



  const user = Moralis.User.current();

  const verifyEmail = async () => {    

   const email = await user.get("email"); 
   const username = await user.get("username"); 

   if(setSent === false){
    await Moralis.Cloud.run("sendWelcomeEmail", {email, username});
   } else {

   };
   
   setEmailTitle("Email has been sent! Please check your inbox/spam to complete the sign up process.")
   setButtonText("Sent!")
   setSent(true);
};
  
    return (
      <div className={cn(className, styles.transfer)}>
        <div className={cn("h4", styles.title)} style={{fontSize: sent ? '26px' : ''}}>{emailTitle}</div>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <button
                className={cn("button-stroke", styles.emailbutton)} onClick={verifyEmail}
            >
            {buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default VerifyEmail;