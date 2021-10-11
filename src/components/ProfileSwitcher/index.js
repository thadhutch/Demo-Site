import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../GlobalState";
import UserProfile from "../../screens/Profile/UserProfile";
import NonUserProfile from "../../screens/Profile/NonUserProfile";

export default function ProfileSwitcher(props) {
    const { username } = useContext(UserContext);
    const [userValue, setUserValue] = useState();

    useEffect(() => {
        if (props.match.params.user) {
            setUserValue(props.match.params.user);
        }
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