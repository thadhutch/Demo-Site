import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../GlobalState";
import UserProfile from "./UserProfile";
import NonUserProfile from "./NonUserProfile";

export default function ProfileSwitcher(props) {
    const { username } = useContext(UserContext);
    const [userValue, setUserValue] = useState(props.match.params.user);

    useEffect(() => {
        if (props.match.params.user) {
            setUserValue(props.match.params.user);
        }
        // const user = Moralis.User.current();
        // console.log(user.attributes.username)
    }, [props.match.params.user]);

    if (userValue === username) {
        return (
            <UserProfile user={userValue} />
        );
    } else {
        return (
            <NonUserProfile user={userValue} />
        );
    }
}