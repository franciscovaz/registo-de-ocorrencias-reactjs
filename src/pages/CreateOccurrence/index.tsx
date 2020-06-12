import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';

const CreateOccurence: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Criação de Ocorrência</h1>
      </Container>
    </>
  );
};

export default CreateOccurence;
