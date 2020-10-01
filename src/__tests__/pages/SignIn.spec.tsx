import React from 'react';

import { fireEvent, render, wait } from '@testing-library/react';
import Login from '../../pages/Login';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }), // quando aparecer o useHistory eu chamo uma funcao push, como no component
    Link: ({ children }: { children: React.ReactNode }) => children, // Tambem uso os Link que mostram o conteudo dos children (Ver Link em SignIn)
  };
});

describe('SignIn page', () => {
  it('should be able to sign in', async () => {
    const { getByPlaceholderText, getByText } = render(<Login />);

    const emailField = getByPlaceholderText('Email');
    const passwordField = getByPlaceholderText('Password');
    const buttonElement = getByText('Entrar');

    fireEvent.change(emailField, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    await wait(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/create-occurrence');
    });
  });
});
