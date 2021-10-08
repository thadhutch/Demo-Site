import React, { useState } from "react";

export const UserContext = React.createContext(false);

function UserProvider(props) {

    const [isUserAuthenticated, setUserAuthenticated] = useState(false);
    const [username, setUsername] = useState("charlie");


    return (
        <UserContext.Provider
            value={{ isUserAuthenticated, setUserAuthenticated, username }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export { UserProvider };