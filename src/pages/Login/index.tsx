import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import imgLogo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const Login: React.FC = () => (
  <Container>
    <Content>
      <img
        src={imgLogo}
        width="230"
        height="134"
        alt="Registo de Ocorrencias"
      />

      <form>
        <h1>Faça o seu login</h1>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit">Entrar</button>

        <a href="/forgot">Esqueci a minha senha</a>
      </form>

      <a href="/signUp">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default Login;
