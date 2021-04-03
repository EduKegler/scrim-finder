import React from "react";
import './button.css';

interface IButton {
    children: React.ReactElement | React.ReactElement[] | string;
    onClick?: () => void;
}

const Button = React.memo((props: IButton) => {
    const { children, onClick } = props;
    return (
        <div className='cf-button' onClick={onClick}>
            {React.Children.map(children, e => e)}
        </div>
    );
});

export default Button;