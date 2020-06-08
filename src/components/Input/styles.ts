import styled from 'styled-components';

export const Container = styled.div`
  & + div {
    margin-top: 8px;
  }

  input {
    background: #232129;
    padding: 16px;
    width: 100%;
    border: 2px solid #232129;
    border-radius: 10px;
    color: #fff;
    font-weight: 500;

    &::placeholder {
      color: #666360;
    }
  }
`;
