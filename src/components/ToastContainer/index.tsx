import React from 'react';

import { ToastMessage } from '../../hooks/toast';
import Toast from './Toast';

import { Container } from './styles';
import { useTransition } from 'react-spring';

interface ToastContaienerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContaienerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );
  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props}></Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
