import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from "../GlobalState";

// restricts users who are logged in from accessing content
const UserRestrictedRoute = ({ component: Component, ...rest }) => {
    const { isUserAuthenticated } = useContext(UserContext);
    return (
        <Route {...rest} render={props => {
            if (isUserAuthenticated)
                return <Redirect to={{
                    pathname: '/home',
                    state: { from: props.location }
                }} />

            return <Component {...props} />
        }} />
    )
}

export default UserRestrictedRoute;