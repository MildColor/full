import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PAGE_PATH } from '../constants/path';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGE_PATH.HOME}></Route>
        <Route path={PAGE_PATH.SIGN_IN}></Route>
        <Route path={PAGE_PATH.SIGN_UP}></Route>
        <Route path={PAGE_PATH.TODO_DETAIL(':id')}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
