import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({children}){
    const [auth, setAuth] = useState({
        token : null,
        isAuthenticate : false
    });

    useEffect(()=> {
        const token = localStorage.getItem("token");
        if(token){
            setAuth({
                token,
                isAuthenticate : true
            })
        }
    },[]);

    function login(token){
        localStorage.setItem("token", JSON.stringify(token));
        setAuth({
            token,
            isAuthenticate : true
        });
    }

    function logout(){
        localStorage.removeItem("token");
        setAuth({
            token : null,
            isAuthenticate : false
        })
    }

    return <AuthContext.Provider value={{auth, login, logout}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext;