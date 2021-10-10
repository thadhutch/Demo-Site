import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../GlobalState";
import NonUserProfile from "./NonUserProfile";
import Profile from "../../screens/Profile";

export default function ProfileSwitcher(props) {
    const { username } = useContext(UserContext);
    const [userValue, setUserValue] = useState(props.match.params.user);

    useEffect(() => {
        if (props.match.params.user) {
            setUserValue(props.match.params.user);
        }
    }, [props.match.params.user]);

    if (userValue === username) {
        return (
            <Profile user={userValue} />
        );
    } else {
        return (
            <NonUserProfile user={userValue} />
        );
    }
}