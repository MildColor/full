import React from 'react';
import Button from '../../components/common/Button/Button';
import Header from '../../components/common/Header/Header';
import Input from '../../components/common/Input/Input';

const SignIn = () => {
  return (
    <>
      <Header title="SignIn" />
      <Input
        title="이메일"
        placeholder="이메일을 입력하세요"
        name="email"
        // value={email}
        // onChange={handleChange}
        // errorMessage={errorMessage.email}
      />
      <Input
        title="비밀번호"
        placeholder="비밀번호를 입력하세요"
        type="password"
        name="password"
        // value={password}
        // onChange={handleChange}
        // errorMessage={errorMessage.password}
      />

      <Button type="submit">로그인</Button>
    </>
  );
};

export default SignIn;
