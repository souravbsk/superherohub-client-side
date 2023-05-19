import React, { createContext, useEffect, useState } from 'react';
import app from '../utilites/firebase.init';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider()
//create user 
const createUser = (email,password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

//login user
const loginUser = (email,password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
}

//login with google
const loginWithGoogle = () => {
    setLoader(true)
    return signInWithPopup(auth,googleProvider);
}


//user name photo update 
const updateNamePhoto = (currentUser,name,photo) => {
    return updateProfile(currentUser,{
        displayName: name,
        photoURL: photo
    })
}


//get user
useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoader(false)
    })
    return () => {
        return unSubscribe()
    }
},[])



//forget pass
const forgetPass = (email) => {
    return sendPasswordResetEmail(auth,email)
}

//log out

const logOut = () => {
    return signOut(auth);
}

    const authInfo = {
        user,
        loader,
        createUser,
        updateNamePhoto,
        loginUser,
        loginWithGoogle,
        logOut,
        forgetPass

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;