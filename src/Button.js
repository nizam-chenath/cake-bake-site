import React from "react";
import './Button.css';

const STYLES = ['BTN-PRIMARY', 'BTN-OUTLINE']

const SIZE = ['BTN-SMALL', 'BTN-MEDIUM', 'BTN-MOBILE', 'BTN-WIDE']

const COLOR = ['PRIMARY', 'RED', 'BLUE', 'GREEN']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
});