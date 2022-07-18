import React, { ChangeEvent } from "react";

import "./Input.scss";


interface IProps {
    type: string;
    value: string;
    onChange: (value: string) => void;
    inputIcon?: JSX.Element;
    placeholder?: string;
}

const Input: React.FC<IProps> = ({inputIcon, type, placeholder, value, onChange}) => {
    return(
        <div className={"inputContainer"}>
            <input
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                placeholder={placeholder}
                type={type}
            />
            <span>{inputIcon}</span>
        </div>
    );
};

export default Input;