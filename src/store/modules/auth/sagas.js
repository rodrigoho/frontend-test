import { takeLatest, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;
  const userEmail = 'hoshino.rodrigo@outlook.com';
  const userPassword = '123456';

  if (email === userEmail && password === userPassword) {
    const user = {
      email,
      password,
    };

    toast.success('Login realizado com sucesso');

    yield put(signInSuccess(user));
  } else {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }

  history.push('/dashboard');
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
