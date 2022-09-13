import {CSSProperties, FC} from "react";
import React from "react";

type ContainerProps = {
    styles: CSSProperties
}

const Container:FC<ContainerProps> = (props) => {
    return(
        <div style={props.styles}>
            Text content goes here
        </div>
    )
}

export default Container