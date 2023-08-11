import React, {FC, JSX} from 'react';

interface IButton {
    children:string|JSX.Element|JSX.Element[]
}
const Button:FC<IButton> = ({children,...props}) => {
    return (
        <button {...props}  className={''}>
            {children}
        </button>
    );
};

export default Button;
