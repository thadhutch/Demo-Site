import React, { useContext } from "react";
import cn from "classnames";
import styles from "./verifyEmail.module.sass";
import { UserContext } from "../../GlobalState";
import { Link } from "react-router-dom";
import Image from "../../components/Image";



const EmailVerified = () => {

    const Moralis = require('moralis');
    Moralis.initialize("7Ku6X8CPeLsTB1hNuxKbkK3zsNXRW9GrRid3wCnD");
  
  
    const user = Moralis.User.current();
    console.log(user);

    const { setUserAuthenticated} = useContext(UserContext);


   


    const saveUser = async () => {    
    
        const user = await Moralis.User.current();
        await user.set("accountVerified", true);
        await user.save();
        setUserAuthenticated(true);
  
  };

    return (
        <>
            <div className={cn("section-pt80", styles.section)}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.head}>
                        <Image 
                            src="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/logo-dark.png?alt=media&token=0dc78010-319d-426b-9dc0-c17db0479ec4"
                            srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/logo-light.png?alt=media&token=af5f3049-b42b-4094-956d-f8377f8986bf"
                            alt="SpacePath Logo"
                        />
                        <div className={cn("h2", styles.stage)}>Thanks for Verifying Your Email!</div>
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