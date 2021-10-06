import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from "../GlobalState";

// restricts users who are NOT logged in from accessing content
const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isUserAuthenticated } = useContext(UserContext);
    return (
        <Route {...rest} render={props => {
            if (!isUserAuthenticated)
                return <Redirect to={{
                    pathname: '/',
                    state: { from: props.location }
                }} />

            return <Component {...props} />
        }} />
    )
}

export default PrivateRoute;