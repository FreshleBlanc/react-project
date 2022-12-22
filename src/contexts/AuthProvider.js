import { useContext, createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from '@firebase/auth'
import { async } from "@firebase/util";

export const AuthContext = createContext()

export const AuthProvider = function(props){
   const [user, setUser] = useState({
        loggedIn: false
})
   
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    async function login(){
        const result = await signInWithPopup(auth,provider)
       
    }

    async function logout(){
        const result = await signOut(auth)
        console.log (result)
    }

    useEffect(() =>{
        onAuthStateChanged(auth, (userInfo) => {
            if (userInfo){
                setUser({
                    email: userInfo.email,
                    username: userInfo.displayName,
                    uid: userInfo.uid,
                    loggedIn: true
                })
            }else{
                setUser({
                    loggedIn: false
                })
            }
        })
    },[])

    
    const value = {
        login,
        logout,
        user
    }
    
    return(
        <AuthContext.Provider value={value}>
            { props.children }
        </AuthContext.Provider>
    )
}
