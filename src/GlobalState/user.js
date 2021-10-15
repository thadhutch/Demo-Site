import React, { useState } from "react";
export const UserContext = React.createContext(false);

function UserProvider(props) {
    const [isUserAuthenticated, setUserAuthenticated] = useState(false);
    const [username, setUsername] = useState();
    const [ethAddress, setEthAddress] = useState();

    return (
        <UserContext.Provider value={{ isUserAuthenticated, setUserAuthenticated, username, setUsername, ethAddress, setEthAddress }}>
            {props.children}
        </UserContext.Provider>
    );
};

export { UserProvider };