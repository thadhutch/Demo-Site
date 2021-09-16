import React, { useState } from "react";

export const AvatarContext = React.createContext(false);

function AvatarProvider(props) {

const [isAvatar, setAvatar] = useState(false);


return (
    <AvatarContext.Provider
        value={{ isAvatar, setAvatar }}
    >
        {props.children}
    </AvatarContext.Provider>
);
};

export {  AvatarProvider };