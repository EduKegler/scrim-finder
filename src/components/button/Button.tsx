import React from "react";
import './button.css';

interface IButton {
    children: React.ReactElement | React.ReactElement[] | string;
}

const Button = React.memo((props: IButton) => {
    const { children } = props;
    return (
        <div className='cf-button'>
            {React.Children.map(children, e => e)}
        </div>
    );
});

export default Button;