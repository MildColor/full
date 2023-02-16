import styled from 'styled-components';

export const Header = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 2.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.blue[0]};
`;
