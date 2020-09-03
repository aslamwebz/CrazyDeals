import React, { useEffect, useState, createContext } from 'react';
import app from '../base'

//?Auth context creattion
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);


    //?on authchange set current user
    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
            localStorage.setItem('user', user.email)
        });
    }, []);

    return (
        //? return provider with current user and child components
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}