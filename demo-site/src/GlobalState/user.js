import React, { useState } from "react";

export const UserContext = React.createContext(false);

function UserProvider(props) {

const [isUserAuthenticated, setUserAuthenticated] = useState(false);


return (
    <UserContext.Provider
        value={{ isUserAuthenticated, setUserAuthenticated }}
    >
        {props.children}
    </UserContext.Provider>
);
};

export { UserProvider };