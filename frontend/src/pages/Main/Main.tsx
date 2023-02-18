import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../components/common/Button/Button.styles';
import Header from '../../components/common/Header/Header';
import { PAGE_PATH } from '../../constants/path';

const todoList = [
  {
    title: 'hidsafdsafdsafdsafdsafdsafdsafdsafdsafdsafasdfdsfaadsfasefd',
    content: 'hi',
    id: 'asdff',
    createdAt: '2021/1/2',
    updatedAt: '2021/1/4',
  },
  { title: 'hi', content: 'hi', id: 'asdff', createdAt: '2021/1/2', updatedAt: '2021/1/4' },
  { title: 'hi', content: 'hi', id: 'asdff', createdAt: '2021/1/2', updatedAt: '2021/1/4' },
];

const Main = () => {
  return (
    <>
      <Header title="TodoList" />
      <section>
        {todoList.map((todo) => {
          return (
            <TodoContainer key={todo.id}>
              <TodoTitleLink to={PAGE_PATH.TODO_DETAIL(todo.id)}>{todo.title}</TodoTitleLink>
              <Button height="100%" width="3rem">
                DEL
              </Button>
            </TodoContainer>
          );
        })}
      </section>
    </>
  );
};

export default Main;

export const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  width: 25rem;
  background-color: ${({ theme }) => theme.colors.brown[0]};
  margin: 0.625rem 0;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;
export const TodoTitleLink = styled(Link)`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;
