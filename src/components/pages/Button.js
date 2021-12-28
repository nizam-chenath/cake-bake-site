import React from "react";
import './Button.css';

const STYLES = ['BTN-PRIMARY', 'BTN-OUTLINE']

const SIZES = ['BTN-SMALL', 'BTN-MEDIUM', 'BTN-MOBILE', 'BTN-WIDE']

const COLOR = ['PRIMARY', 'RED', 'BLUE', 'GREEN']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]
    const checkButtonColor = STYLES.includes(buttonColor) ? buttonColor : COLOR[0]

    return(
    <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onclick} type={type}>{children}</button>
    )
}