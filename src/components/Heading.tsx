import {FC} from "react";

type HeadingProps = {
    children: string
}

const Heading:FC<HeadingProps> = ({children}) => {
    return(
        <div>
            <h2>{children}</h2>
        </div>
    )
}

export default Heading