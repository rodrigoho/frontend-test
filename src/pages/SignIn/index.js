import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signInRequest(userEmail, userPassword));
  }

  return (
    <>
      <form schema={schema} onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={userEmail}
          onChange={e => setUserEmail(e.target.value)}
          placeholder="Seu e-mail"
        />
        <input
          name="password"
          type="password"
          value={userPassword}
          onChange={e => setUserPassword(e.target.value)}
          placeholder="Sua senha"
        />

        <button type="submit">{loading ? 'Carregando...' : 'Accessar'}</button>
      </form>
    </>
  );
}
