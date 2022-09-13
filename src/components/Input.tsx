import React, {FC} from "react";

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input:FC<InputProps> = (props) => {
    return <input type='text' value={props.value} onChange={props.handleChange} />
}

export default Input