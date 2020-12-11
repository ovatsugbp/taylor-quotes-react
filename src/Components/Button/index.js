import React from 'react';
import "./style.css";

const SIZES = [
    "btn--donate--sm",
    "btn--donate--md",
    "btn--donate--lg",
    "btn--login--sm",
    "btn--create--md",
    "btn--save--sm",
    "btn--save--lg",
    "btn--password--sm",
    "btn--message--md",
    "btn--search--md",
    "btn--campaigns--lg",
    "btn--form--xl",
];

const STYLES = ["btn--solid", "btn--light"]

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];


    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type ={type}>
            {children}
        </button>
    )
}

export default Button;