import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Form } from '@unform/web';
import imgLogo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />

      <Content>
        <img
          src={imgLogo}
          width="230"
          height="134"
          alt="Registo de Ocorrencias"
        />

        <Form
          initialData={{
            email: 'frank@gmail.pt',
          }}
          onSubmit={handleSubmit}
        >
          <h1>Faça o seu registo</h1>

          <Input name="name" icon={FiUser} type="name" placeholder="Name" />
          <Input name="email" icon={FiMail} type="email" placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Registar</Button>
        </Form>

        <a href="/">
          <FiArrowLeft />
          Voltar ao Login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
