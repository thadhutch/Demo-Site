import cn from "classnames";
import React, { useContext } from "react";
import { useMoralis } from "react-moralis";
import styles from "../Header.module.sass";
import { Link } from "react-router-dom";
import Loader from '../../Loader/index';
import { UserContext } from "../../../GlobalState/index";


function ConnectAndLogout() {

    const Moralis = require('moralis'); 
    Moralis.initialize("mQR7k1NobAMkMfqKdgIQowcepJpSPcOTCNn2Ds8f"); 
    const { isUserAuthenticated, setUserAuthenticated } = useContext(UserContext);

    function logoutFunc() {
        logout();
        setUserAuthenticated(false);
    };

    const { logout } = useMoralis();

    if(isUserAuthenticated) {
        return (
            <Link to='/'>
            <button
            className={cn("button-small", styles.button)} onClick={logoutFunc}
            >
            Logout
            </button>
            </Link>
        );
    } else {

        return (
           <>
           </>
        );
    };
};

export default ConnectAndLogout;