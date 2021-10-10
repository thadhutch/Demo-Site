import React, { useState, useEffect } from "react";
export const UserContext = React.createContext(false);

function UserProvider(props) {
    const Moralis = require('moralis');
    const [isUserAuthenticated, setUserAuthenticated] = useState(false);
    const [username, setUsername] = useState("charlie");

    useEffect(() => {
        const user = Moralis.User.current();
        if (user) {
            setUserAuthenticated(true);
            setUsername(user.attributes.username);
        }
    }, []);

    return (
        <UserContext.Provider
            value={{ isUserAuthenticated, setUserAuthenticated, username }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export { UserProvider };