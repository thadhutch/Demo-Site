import React, { useState, useEffect } from "react";
export const UserContext = React.createContext(false);

function UserProvider(props) {
    const Moralis = require('moralis');
    Moralis.initialize("7Ku6X8CPeLsTB1hNuxKbkK3zsNXRW9GrRid3wCnD");
    const [isUserAuthenticated, setUserAuthenticated] = useState(false);
    const [username, setUsername] = useState();

    useEffect(() => {
        const user = Moralis.User.current();
        if (user) {
            setUserAuthenticated(true);
            setUsername(user.attributes.username);
            // console.log(user.attributes.username);
        } else {
            setUserAuthenticated(false);
            setUsername(null);
        }
    }, []);

    return (
        <UserContext.Provider value={{ isUserAuthenticated, setUserAuthenticated, username }}>
            {props.children}
        </UserContext.Provider>
    );
};

export { UserProvider };