import React, { FC, InputHTMLAttributes } from 'react';
import * as St from './Input.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  placeholder?: string;
  labelText?: string;
}

const Input: FC<InputProps> = ({ width = '17.5rem', title, height, placeholder, errorMessage, ...props }) => {
  return (
    <St.InputLayout width={width} height={height}>
      <St.SignInFormTitle>{title}</St.SignInFormTitle>
      <St.InputField placeholder={placeholder} {...props} />
      <St.ErrorMessage>{errorMessage}</St.ErrorMessage>
    </St.InputLayout>
  );
};

export default Input;
