import React, { Component } from 'react';
import * as s from './login.scss';
import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';
import { errorMessages, someEmpty } from '../Register/utils';
import FormManager from '../../FormManager/FormManager';
const AlreadyLoggedInMessage = ({ username }) => {
  return (
    <div className={'loggedin-message'}>
      <h2>
        Seems like you are already logged in as <u>{username}</u>
      </h2>
    </div>
  );
};

const formInitialData = {
  username: '',
  password: '',
};
export const Login = ({
  loading,
  isLoggedIn,
  currentlyLoggedInUser,
  loginUser,
}) => {
  
  if (isLoggedIn) {
    return <AlreadyLoggedInMessage username={currentlyLoggedInUser} />;
  }

  return (
    <div className={'login-page'}>
      <h1 className={'page-title'}>Login</h1>
      <FormManager formInitialData={formInitialData} onSubmitAction={loginUser}>
        {({
          username,
          password,
          onChange,
          onKeyPressHandler,
          onSubmit,
          checkForErrors,
        }) => {
          return (
            <div className={'form-wrapper'} onKeyUp={onKeyPressHandler}>
              <Input
                error={checkForErrors('username')}
                value={username}
                name={'username'}
                type={'text'}
                onChange={onChange}
                title={'Username'}
              />
              <Input
                error={checkForErrors('password')}
                value={password}
                name={'password'}
                type={'password'}
                onChange={onChange}
                title={'Password'}
              />
              <div className={'login-btn'}>
                <Button onClick={onSubmit} theme={'dark'} loading={loading}>
                  login
                </Button>
              </div>
            </div>
          );
        }}
      </FormManager>
    </div>
  );
};
