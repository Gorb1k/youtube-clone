import {createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useState} from "react";

interface IContext {
    user: {
        email:string
        _id:string
    } | null
    accessToken: string
    setData: Dispatch<SetStateAction<Omit<IContext, "setData">>> | null
}


export const AuthContext = createContext<IContext>({} as IContext)


const AuthProvider:FC<PropsWithChildren<unknown>> = ({children}) => {

    const [data, setData] = useState<Omit<IContext, 'setData'>>({user:null, accessToken: ''})



    return (
        <AuthContext.Provider value={{...data, setData}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;