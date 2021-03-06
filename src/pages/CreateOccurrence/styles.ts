import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;

  form {
    margin: 80px auto;
    padding: 64px;
    max-width: 730px;
    background: ${props => props.theme.colors.registerCardBackground};
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    .leaflet-container {
      width: 100%;
      height: 350px;
      border-radius: 8px;
      margin-bottom: 24px;
    }

    h1 {
      font-size: 36px;
      color: ${props => props.theme.colors.whiteGrey};
    }

    fieldset {
      margin-top: 36px;
      min-inline-size: auto;
      border: 0;
    }

    legend {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;

      h2 {
        font-size: 24px;
        color: ${props => props.theme.colors.whiteGrey};
      }

      span {
        font-size: 14px;
        font-weight: normal;
        color: ${props => props.theme.colors.whiteGrey};
      }
    }

    button {
      width: 260px;
      height: 56px;
      background: #0b0b0b;
      border-radius: 8px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      border: 0;
      align-self: flex-end;
      margin-top: 40px;
      transition: background-color 0.2s;
      cursor: pointer;

      &:hover {
        background: var(--text-color);
      }
    }
  }
`;

export const Field = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  input {
    flex: 1;
    background: ${props => props.theme.colors.secundary};
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;

    &::placeholder {
      color: #a0a0b2;
    }
  }

  textarea {
    flex: 1;
    background: ${props => props.theme.colors.secundary};
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;

    &::placeholder {
      color: #a0a0b2;
    }
  }
  label {
    font-size: 14px;
    margin-bottom: 8px;
    color: ${props => props.theme.colors.whiteGrey};
  }
`;
