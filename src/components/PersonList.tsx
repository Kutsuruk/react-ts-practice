import {FC} from "react";

type PersonsListProps = {
    names: {
        firstname: string,
        lastname: string
    }[]
}

const PersonsList:FC<PersonsListProps> = (props) => {
    return(
        <div>
            {
                props.names.map((name, index) =>
                    <h2 key={index}>{name.firstname} {name.lastname}</h2>)
            }
        </div>
    )
}

export default PersonsList