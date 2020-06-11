import React, { useCallback } from 'react';

import { ToastMessage, useToast } from '../../hooks/toast';
import Toast from './Toast';

import { Container } from './styles';

interface ToastContaienerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContaienerProps> = ({ messages }) => {
  const { removeToast } = useToast();

  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message}></Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
