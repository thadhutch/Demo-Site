import React, { useEffect, useState } from "react";

export default function NonUserProfile(props) {
    const Moralis = require('moralis');
    Moralis.initialize("7Ku6X8CPeLsTB1hNuxKbkK3zsNXRW9GrRid3wCnD");
    Moralis.serverURL = 'https://kp2g9eqiyitu.bigmoralis.com:2053/server';
    const [userData, setUserData] = useState([]);

    // useEffect(() => {
    //     getData();
    //     console.log(props.user)
    // }, []);

    // async function getData() {
    //     try {
    //         const UserObject = Moralis.Object.extend("User");
    //         const query = new Moralis.Query(UserObject);
    //         // query.equalTo("username", "owenrob");
    //         const results = await query.find();
    //         setUserData(results);
    //         console.log("results: " + results);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    return (
        <div>
            other user {props.user}
        </div>
    );
}