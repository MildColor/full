import React from 'react';
import * as St from './Header.styles';

const Header = ({ title }: { title: string }) => {
  return <St.Header>{title}</St.Header>;
};

export default Header;
