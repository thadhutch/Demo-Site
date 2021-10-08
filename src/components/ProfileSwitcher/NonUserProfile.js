import React, { useEffect, useState } from "react";

export default function NonUserProfile(props) {
    const Moralis = require('moralis');
    Moralis.initialize("7Ku6X8CPeLsTB1hNuxKbkK3zsNXRW9GrRid3wCnD");
    Moralis.serverURL = 'https://kp2g9eqiyitu.bigmoralis.com:2053/server';
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const results = await Moralis.Cloud.run("userQuery", { username: props.user });
            setUserData(results[0].attributes);
            // console.log(results[0].attributes);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div>
                username: {userData.username}
            </div>
            <div>
                display name: {userData.display_name}
            </div>
            <div>
                bio: {userData.bio}
            </div>
            <div>
                {userData.ethAddress}
            </div>
            <img src={userData.profile_picture?._url}></img>
            <img src={userData.profile_banner?._url}></img>
        </div>
    );
}