import React, {FC} from "react";

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}


const Button:FC<ButtonProps> = (props) => {
    return(
        <button onClick={event => props.handleClick(event, 1)}>Click</button>
    )
}

export default Button