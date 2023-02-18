import React from 'react';
import * as St from './Layout.styles';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <St.Layout>
      <St.Wrapper>{children}</St.Wrapper>
    </St.Layout>
  );
};

export default Layout;
