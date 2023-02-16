import React, { FC, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  placeholder?: string;
  title?: string;
}

const Input: FC<InputProps> = ({}) => {
  return (
    <div>
      <label></label>
      <input type="text" />
      <span></span>
    </div>
  );
};

export default Input;
