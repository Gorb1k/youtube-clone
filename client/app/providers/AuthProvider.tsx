import {createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useEffect, useState} from "react";
import {IAuthData} from "../services/auth/auth.helper";
import Cookies from "js-cookie";
import {AuthService} from "../services/auth/auth.service";
import {useRouter} from "next/router";


interface IContext extends IAuthData {
    setData:  Dispatch<SetStateAction<IAuthData>> | null
    handleLogout: () => void
}

const initialAuthData = {user:null, accessToken: ''}

export const AuthContext = createContext<IContext>({} as IContext)


const AuthProvider:FC<PropsWithChildren<unknown>> = ({children}) => {

    const [data, setData] = useState<IAuthData>(initialAuthData)
    const {pathname} = useRouter()

    const handleLogout = () => {
        AuthService.logout()
        setData(initialAuthData)
    }

    useEffect(() => {
        const accessToken = Cookies.get('accessToken')
        if (accessToken)  {
            const user = localStorage.getItem('user') || ''
            setData({
                user: JSON.parse(user),
                accessToken
            })
        }
    },[])
    useEffect(() => {
        const accessToken = Cookies.get('accessToken')
        if (!accessToken && !data.user) handleLogout()
    },[pathname])

    return (
        <AuthContext.Provider value={{...data, setData, handleLogout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;