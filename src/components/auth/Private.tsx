import Login from "./Login";
import React, {FC} from "react";
import {ProfileProps} from "./Profile";

type PrivateProps = {
    isLoggedIn: boolean,
    component: React.ComponentType<ProfileProps>,
}

const Private:FC<PrivateProps> = ({isLoggedIn, component: Component}) => {
    if (isLoggedIn) {
        return <Component name='Denni' email='denni@mail.com' />
    } else {
        return <Login />
    }
}

export default Private