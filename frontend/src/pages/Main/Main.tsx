import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/common/Layout/Layout';

const Main = () => {
  return (
    <Layout>
      <span>hi</span>
      <span>hi</span>
      <span>hi</span>
      <span>hi</span>
      <span>hi</span>
      <span>hi</span>
      <span>hi</span>
      <span>hi</span>
    </Layout>
  );
};

export default Main;

export const Wrapper = styled.div`
  height: 100vh;
  width: 576px;
  margin: 0 auto;
  background-color: white;
`;
