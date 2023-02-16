import React, { FC, ReactElement, ButtonHTMLAttributes } from 'react';
import * as St from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactElement | string;
  height?: string;
  width?: string;
  color?: 'primary' | 'warning';
}

const Button: FC<ButtonProps> = ({ color, height = '1.875rem', width = '7.5rem', children, ...args }) => {
  return (
    <St.Button height={height} width={width} color={color} {...args}>
      {children}
    </St.Button>
  );
};

export default Button;
