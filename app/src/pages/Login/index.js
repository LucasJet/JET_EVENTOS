import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';

import {
  Container,
  ContainerLogin,
  ContainerForm,
} from './styles'

const Login = () => {
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (event) => {
    try {
      await signIn({
        email: event.target.login.value,
        password: event.target.password.value,
      });

      history.push('/inicio');

      addToast({
        type: 'success',
        title: 'Autenticado com sucesso!',
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro na Autenticação',
        description: 'Ocorreu um erro ao fazer login, verifique as credenciais!',
      });
    }
  }, [signIn, addToast, history]);

  return (
    <Container>
      <ContainerLogin>
        <img src={ require('../../assets/logo-jet-azul.svg')} alt="foto jet" />

        <ContainerForm>
          <h2>Faça login</h2>

          <form onSubmit={ (e) => {
            e.preventDefault()
            handleSubmit(e)
          } }>
            <input
              id="login"
              type="text"
              required
              placeholder="Usuário"
            />

            <input
              id="password"
              type="password"
              required
              placeholder="Senha"
            />

            <button type="submit">Entrar</button>
          </form>
        </ContainerForm>
      </ContainerLogin>

      <img src={ require('../../assets/foto-jet-sobre-nos.JPG')} alt="foto jet" />
    </Container>
  );
};

export default Login;