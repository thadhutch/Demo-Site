import React, { useEffect, useState } from "react";
const Moralis = require('moralis');

export default function UserProfile(props) {
    Moralis.initialize("7Ku6X8CPeLsTB1hNuxKbkK3zsNXRW9GrRid3wCnD");
    Moralis.serverURL = 'https://kp2g9eqiyitu.bigmoralis.com:2053/server';
    const [userData, setUserData] = useState([]);

    // useEffect(() => {
    //     getData();
    // }, []);

    // async function getData() {
    //     try {
    //         const results = await Moralis.Cloud.run("userQuery", {username: props.user});
    //         setUserData(results[0].attributes);
    //         console.log(results[0].attributes);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <div>
            current user {props.user}
        </div>
    );
}