import {FC} from "react";

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
}

const Toast:FC<ToastProps> = ({position}) => {
    return(
        <div>
            <h2>Toast Notification Position - {position}</h2>
        </div>
    )
}

export default Toast