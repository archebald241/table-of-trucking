import React from 'react';
import { IconArrowDown } from '../../../assets/Icons';
import "./Select.scss";

interface IOption{
    value: string;
    label: string;
}

interface IProps {
    options: Array<IOption>;
    value: string;
    setValue: (value: string) => void;
}

const Select: React.FC<IProps> = ({value, options, setValue}) => {
    return (
        <div className={"selectContainer"}>
            <select value={value} onChange={(e) => setValue(e.target.value)}>
                {options.map((option) =>
                    <option value={option.value} key={option.value}>{option.label}</option>
                )}
            </select>
            <span>
                <IconArrowDown color='gray' />
            </span>
        </div>
    )
}

export default Select