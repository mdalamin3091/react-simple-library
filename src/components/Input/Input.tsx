import React, { MouseEventHandler } from "react";
import styled from "styled-components";

export type InputProps = {
    type: string;
    value?: string;
    disabled?: boolean;
    primary?: boolean;
    size?: "small" | "medium" | "large";
    onChange?: MouseEventHandler<HTMLInputElement>;
};

const StyledInput = styled.button<InputProps>`
    border: 0;
    line-height: 1;
    font-size: 15px;
    font-weight: 700;
    font-weight: bold;
    border-radius: 10px;
    display: inline-block;
    color: ${(props) => (props.primary ? "#fff" : "#000")};
    background-color: ${(props) => (props.primary ? "#FF5655" : "#f4c4c4")};
    padding: ${(props) =>
        props.size === "small"
            ? "7px 25px 8px"
            : props.size === "medium"
              ? "9px 30px 11px"
              : "14px 30px 16px"};
`;

const Input: React.FC<InputProps> = ({
    size,
    disabled,
    type,
    value,
    primary,
    onChange,
    ...props
}) => {
    return (
        <StyledInput
            type={type}
            primary={primary}
            onChange={onChange}
            disabled={disabled}
            size={size}
            value={value}
            {...props}
        />
    );
};

export default Input;
