import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import getValidationErrors from '../../utils/getValidationErrors';

import imgLogo from '../../assets/logo.svg';

import { Container, Content, AnimationContainer, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

interface UserInfoToAdd {
  nome_utilizador: string;
  email_utilizador: string;
  telemovel_utilizador?: string;
  password_utilizador: string;
  fk_tipo_utilizador: number; // utilizador comum - 4
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: UserInfoToAdd) => {
      formRef.current?.setErrors({});
      try {
        const schema = Yup.object().shape({
          nome_utilizador: Yup.string().required('Nome obrigatório'),
          email_utilizador: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password_utilizador: Yup.string().min(6, 'Mínimo de 6 caracteres'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        data.fk_tipo_utilizador = 4;

        await api.post('utilizador', data);

        history.push('/');
      } catch (err) {
        formRef.current?.setErrors(getValidationErrors(err));
      }
    },
    [history],
  );

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img
            src={imgLogo}
            width="230"
            height="134"
            alt="Registo de Ocorrencias"
          />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça o seu registo</h1>

            <Input
              name="nome_utilizador"
              icon={FiUser}
              type="name"
              placeholder="Name"
            />
            <Input
              name="email_utilizador"
              icon={FiMail}
              type="email"
              placeholder="Email"
            />
            <Input
              name="password_utilizador"
              icon={FiLock}
              type="password"
              placeholder="Password"
            />

            <Button type="submit">Registar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar ao Login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
