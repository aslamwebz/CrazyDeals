import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth'

//? Wrapper around regular route
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
            //? passing rest of the props
            {...rest}
            render={routeProps =>
                //? if authenticated go to the protected route
                !!currentUser ? (
                    <RouteComponent {...routeProps} />
                    //? else to login
                ) : (
                        <Redirect to={"/login"} />
                    )
            } />


    )
}

export default PrivateRoute