import React, { useContext } from "react";
import cn from "classnames";
import styles from "./verifyEmail.module.sass";
import Modal from "../../components/Modal";
import { UserContext } from "../../GlobalState";
import { Link } from "react-router-dom";



const EmailVerified = () => {

    const Moralis = require('moralis');
    Moralis.initialize("mQR7k1NobAMkMfqKdgIQowcepJpSPcOTCNn2Ds8f");
  
  
    const user = Moralis.User.current();
    console.log(user);

    const { setUserAuthenticated} = useContext(UserContext);


   


    const saveUser = async () => {    
    
        const user = await Moralis.User.current();
        setUserAuthenticated(true);
        await user.set("accountVerified", true);
        await user.save();
  
  };

    return (
        <>
            <div className={cn("section-pt80", styles.section)}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.head}>
                        <h1>Thanks for verifying your email!</h1>
                    </div>
                    <div className={styles.body}>
                        <h2 className={styles.verifiedTitle}>Please Click the Button Below to View the Demo</h2>
                        <Link to="/home">
                            <button className={cn("button", styles.homebutton)} onClick={saveUser}>Continue To Demo!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    );

};

export default EmailVerified;