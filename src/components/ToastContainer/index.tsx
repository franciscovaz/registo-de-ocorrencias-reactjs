import React from 'react';

import { ToastMessage } from '../../hooks/toast';
import Toast from './Toast';

import { Container } from './styles';

interface ToastContaienerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContaienerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message}></Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
