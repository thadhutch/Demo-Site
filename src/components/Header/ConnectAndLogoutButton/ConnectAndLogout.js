import cn from "classnames";
import React, { useContext } from "react";
import { useMoralis } from "react-moralis";
import styles from "../Header.module.sass";
import { Link } from "react-router-dom";
import { UserContext } from "../../../GlobalState/index";


function ConnectAndLogout() {

    const Moralis = require('moralis'); 
    Moralis.initialize("7Ku6X8CPeLsTB1hNuxKbkK3zsNXRW9GrRid3wCnD"); 

    const user = Moralis.User.current();

    

    const { logout } = useMoralis();

    if(user) {
        return (
            <Link to='/'>
            <button
            className={cn("button-small", styles.button)} onClick={() => logout()}
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