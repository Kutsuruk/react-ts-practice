import {FC, ReactNode} from "react";

type OscarProps = {
    children: ReactNode
}

const Oscar:FC<OscarProps> = ({children}) => {
    return(
        <div>
            <h2>
                {children}
            </h2>
        </div>
    )
}

export default Oscar