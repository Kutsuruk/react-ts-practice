import {FC} from "react";

type GreetProps = {
    name: string,
    messagesCount?: number,
    isLogged: boolean
}

const Greet: FC<GreetProps> = (props) => {
    return(
        <div>
            {
                props.isLogged ? <div>
                    <h1>Welcome, {props.name}!</h1>
                    <p>You have {props.messagesCount} unread messages, let`s check it now</p>
                </div> : <div>
                    <h1>Welcome, Guest!</h1>
                </div>
            }
        </div>
    )
}

export default Greet