import {FC} from "react";

export type ProfileProps = {
    name: string,
    email: string
}

const Profile:FC<ProfileProps> = ({name, email}) => {
    return(
        <>
            <h1>Profile page of {name}</h1>
            <div>
                <ul>
                    <li>My name is {name}</li>
                    <li>Write me on {email}</li>
                </ul>
            </div>
        </>
    )
}

export default Profile