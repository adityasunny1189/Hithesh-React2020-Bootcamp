import React from "react";
import "./styles.css";

const Button = ({title}) => (
    <div>
        <button className = "button">{title}</button>
    </div>
);

export default Button;