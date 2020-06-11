import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import imgLogo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { Link, useHistory } from 'react-router-dom';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();

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

        await signIn({
          email: data.email,
          password: data.password,
        });

        // Adicionar Toast
        addToast({
          type: 'success',
          title: 'Login efetuado com sucesso',
        });

        history.push('/create-occurrence');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        } else {
          addToast({
            type: 'error',
            title: 'Erro na autenticação',
            description: err.message,
          });
        }
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

        <Link to="/signup">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default Login;
