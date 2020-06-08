import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import imgLogo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

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

        <Input name="email" icon={FiMail} type="email" placeholder="Email" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Password"
        />

        <Button type="submit">Entrar</Button>

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
