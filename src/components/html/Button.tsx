import React, {FC} from "react";

type ButtonProps = {
    variant: 'primary' | 'secondary',
    children: string,
} & Omit<React.ComponentProps<'button'>, 'children'>

const CustomButton:FC<ButtonProps> = ({variant, children, ...rest}) => {
    return(
        <button className={`class-with-${variant}`} {...rest}>{children}</button>
    )
}

export default CustomButton