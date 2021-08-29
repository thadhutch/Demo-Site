import cn from "classnames";
import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import styles from "../Header.module.sass";
import { Link } from "react-router-dom";
import Loader from '../../Loader/index';

function ConnectAndLogout() {
    const { isAuthenticated, logout, isAuthenticating } = useMoralis();

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

    }, [userCheck]);


    if(isAuthenticated) {
        return (
            <Link to='/'>
            <button
            className={cn("button-small", styles.button)} onClick={() => logout()}
            >
            Logout
            </button>
            </Link>
        );
    }

    if(isAuthenticating) {
        return (
            <Loader />
        );
    }

    return (
        <Link to='/connect-wallet'>
        <button
          className={cn("button-small", styles.button)}
        >
          Connect Wallet
        </button>
        </Link>
    );
}

export default ConnectAndLogout;