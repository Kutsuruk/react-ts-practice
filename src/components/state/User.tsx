import {FC, useState} from "react";

type AuthUser = {
    name: string,
    email: string
}

const User:FC<AuthUser> = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => setUser({name: 'Vishwas', email: 'vishwas@mail.com'})
    // const handleLogout = () => setUser(null)

    return(
        <div>
            <button>Login</button>
            <button>Logout</button>
            <div>User name is {user.name}</div>
            <div>User e-mail is {user.email}</div>
        </div>
    )
}