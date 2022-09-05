import {FC} from "react";

type PersonProps = {
    name: {
        firstname: string,
        lastname: string
    }
}

const Person:FC<PersonProps> = (props) => {
    return(
        <div>
            <h2>{props.name.firstname} {props.name.lastname}</h2>
        </div>
    )
}

export default Person