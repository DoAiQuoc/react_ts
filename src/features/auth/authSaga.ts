import { PayloadAction } from '@reduxjs/toolkit';
import authApi from 'api/authApi';
import { ResponseData } from 'models';
import { User, UserData } from 'models/user';
import { call, fork, put, take } from 'redux-saga/effects';
import { forwardTo } from 'utils';
import { LoginPayload, authActions } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  try {
    const userRes: ResponseData<UserData<User>> = yield call(authApi.login, payload);
    if (userRes && userRes.code === 0) {
      yield put(
        authActions.loginsuccess({
          id: 1,
          user_id: '100000',
          user_name: 'quocda',
        })
      );
      yield call(forwardTo, '/');
      console.log('running here');
    }
  } catch (error) {
    yield put(authActions.loginFail());
  }
}

function* handleLogout() {
  yield put(authActions.logout);
}

function* watchLoginFlow() {
  while (true) {
    const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
    yield fork(handleLogin, action.payload);

    yield take(authActions.logout.type);
    yield fork(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
