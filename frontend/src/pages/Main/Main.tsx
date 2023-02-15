import React from 'react';
import styled from 'styled-components';
import Header from '../../components/common/Header/Header';

const Main = () => {
  return (
    <>
      <Header title="TodoList" />
      <span>hi</span>
      <span>hi</span>
      <span>hi</span>
      <span>hi</span>
    </>
  );
};

export default Main;

export const Wrapper = styled.div`
  height: 100vh;
  width: 576px;
  margin: 0 auto;
  background-color: white;
`;
