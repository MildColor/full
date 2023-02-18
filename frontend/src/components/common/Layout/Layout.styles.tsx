import styled from 'styled-components';

export const Layout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  width: 576px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.pink[0]};

  border-radius: 10%;
`;
