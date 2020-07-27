import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth'
import * as firebase from 'firebase'

//? Wrapper around regular route
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {

    const { currentUser } = useContext(AuthContext);
    const db = firebase.firestore()
    if (currentUser) {
        db.collection('users').doc(currentUser.uid).get().then(doc => {
            console.log(doc.data().profilepic)
        })
    }
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