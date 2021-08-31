import cn from "classnames";
import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import styles from "../Header.module.sass";
import { Link } from "react-router-dom";
import Loader from '../../Loader/index';

function ConnectAndLogout() {

    const Moralis = require('moralis'); 
    Moralis.initialize("mQR7k1NobAMkMfqKdgIQowcepJpSPcOTCNn2Ds8f"); 

    const { isAuthenticated, logout, isAuthenticating } = useMoralis();

    const [userCheck, setUserCheck] = useState(false);


    if(isAuthenticated) {
        return (
            <Link to='/'>
            <button
            className={cn("button-small", styles.button)} onClick={() => logout()}
            >
            Logout 1
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
        <Link to='/'>
        <button
          className={cn("button-small", styles.button)}
        >
          Logout
        </button>
        </Link>
    );
};

export default ConnectAndLogout;