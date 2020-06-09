import React, { useRef, useCallback, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import imgLogo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import { AuthContext } from '../../hooks/AuthContext';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn, auth } = useContext(AuthContext);
  console.log(auth);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      formRef.current?.setErrors({});

      try {
        const schema = Yup.object().shape({
          email: Yup.string().required('Email obrigatório'),
          password: Yup.string().required('Password obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        formRef.current?.setErrors(getValidationErrors(err));
      }
    },
    [signIn],
  );
  return (
    <Container>
      <Content>
        <img
          src={imgLogo}
          width="230"
          height="134"
          alt="Registo de Ocorrencias"
        />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça o seu login</h1>

          <Input name="email" icon={FiMail} type="email" placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Entrar</Button>

          <a href="/forgot">Recuperar palavra-passe</a>
        </Form>

        <a href="/signUp">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default Login;
