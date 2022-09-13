import React, {createContext, useState} from "react";

export type UserAuth = {
    name: string,
    email: string
}

type UserContextProviderProps = {
    children: React.ReactNode
}

type UserContextType = {
    user: UserAuth | null,
    setUser:  React.Dispatch<React.SetStateAction<UserAuth | null>>
}

export const UserContext = createContext<UserContextType | null>(null)

const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = useState<UserAuth | null>(null)

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

