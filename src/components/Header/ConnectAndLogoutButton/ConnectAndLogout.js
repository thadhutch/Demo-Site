import cn from "classnames";
import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import styles from "../Header.module.sass";
import Modal from '../../Modal/index';
import Login from '../../Login/index';


function ConnectAndLogout() {

    const Moralis = require('moralis'); 
    Moralis.initialize("7Ku6X8CPeLsTB1hNuxKbkK3zsNXRW9GrRid3wCnD"); 

    const user = Moralis.User.current();

    const [visibleModal, setVisibleModal] = useState(false);


    const { logout } = useMoralis();

    
        return (
            <>
                {/* <Modal visible={visibleModal} onClose={setVisibleModal(false)}>
                    <Login />
                </Modal> */}
                {user ? (
                    <button
                    className={cn("button-small", styles.button)} onClick={() => logout()}
                    >
                    Logout
                    </button>
                ) : (
                    <button
                        className={cn("button-small", styles.button)} onClick={setVisibleModal(true)}
                        >
                        Connect Wallet
                    </button>
                )} 
         </>
        );
};

export default ConnectAndLogout;