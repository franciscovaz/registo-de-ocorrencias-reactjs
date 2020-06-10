import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Descrição do erro que pode ser maior</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast hasDescription type="success">
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Descrição do erro que pode ser maior</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast hasDescription={false} type="error">
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
