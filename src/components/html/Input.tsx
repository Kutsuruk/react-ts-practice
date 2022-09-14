import React, {FC} from "react";

type InputProps = React.ComponentProps<'input'>

const CustomInput:FC<InputProps> = (props) => {
    return <input {...props} />
}

export default CustomInput