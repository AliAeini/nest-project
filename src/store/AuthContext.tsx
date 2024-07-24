import { userType } from "@/types";
import {createContext, ReactNode, useState} from "react";
import {toast} from "react-toastify";
import {useRouter} from "next/router";

interface Props {
    children: ReactNode
}
interface authContextType{
    is_login: boolean,
    login: (jwt: string, user: userType) => void
    logOut: ()=> void,
}

export const AuthContext = createContext<authContextType>({is_login: false, login: ()=>{}, logOut: ()=>{}})

export function AuthContextProvider({children}: Props) {
    const [isLogin, setIsLogin] = useState(false)
    const router = useRouter()

    const loginHandler = (jwt: string, user: userType)=>{
        window.localStorage.setItem("jwt", jwt)
        window.localStorage.setItem("user", JSON.stringify(user))
        setIsLogin(true)
        toast.success("login sucssesfully")
        router.push("/")
    }
    const logOutHandler = ()=>{
        window.localStorage.removeItem("jwt")
        window.localStorage.removeItem("user")
        setIsLogin(false)
        toast.success("log out sucssesfully")
    }
    return (
        <AuthContext.Provider value={{is_login: isLogin, login: loginHandler, logOut: logOutHandler}}>
            {children}
        </AuthContext.Provider>
    );
}