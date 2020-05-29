import styled from 'styled-components';
import { shade } from 'polished';
import backgroundImg from '../../assets/sinalizacao1.jpeg';

export const Container = styled.div`
  height: 100vh;
  display: flex;

  align-items: scretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #232129;
      padding: 16px;
      width: 100%;
      border: 2px solid #232129;
      border-radius: 10px;
      color: #fff;
      font-weight: 500;

      & + input {
        margin-top: 8px;
      }

      &::placeholder {
        color: #666360;
      }
    }

    button {
      width: 100%;
      height: 56px;
      background: #ff9000;
      padding: 0 16px;
      margin-top: 16px;
      border: 0;
      border-radius: 10px;
      color: #312e38;
      font-weight: 500;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 16px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    display: block;

    display: flex;
    align-items: center;

    color: #ff9000;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;
