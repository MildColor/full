import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PAGE_PATH } from '../constants/path';
import Main from '../pages/Main/Main';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import TodoDetail from '../pages/TodoDetail/TodoDetail';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGE_PATH.HOME} element={<Main />}></Route>
        <Route path={PAGE_PATH.SIGN_IN} element={<SignIn />}></Route>
        <Route path={PAGE_PATH.SIGN_UP} element={<SignUp />}></Route>
        <Route path={PAGE_PATH.TODO_DETAIL(':id')} element={<TodoDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
