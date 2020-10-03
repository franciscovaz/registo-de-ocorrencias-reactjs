import React from 'react';

import { render } from '@testing-library/react';

import Input from '../../components/Input';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'Email',
        registerField: jest.fn(),
        defaultValue: '',
        error: '',
      };
    },
  };
});

describe('Input component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input name="Email" placeholder="Email" />,
    );

    expect(getByPlaceholderText('Email')).toBeTruthy();
  });
});
