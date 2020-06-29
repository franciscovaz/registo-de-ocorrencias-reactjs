import styled from 'styled-components';

export const Container = styled.header`
  padding: 32px 0;
  background: ${props => props.theme.colors.headerBackground};
`;

interface LinkProps {
  name: string;
}

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;

  align-content: space-between;

  /* > a RIMEIRA imagem, o 1º elemento */
  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    border: 0;
    background: transparent;

    svg {
      color: #ff9000;
      width: 20px;
      height: 20px;
    }
  }
`;

export const MenuItems = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      opacity: 0.8;
      color: #ff9000;
    }

    & + a {
      margin-left: 40px;
    }

    &.underline {
      border-bottom: 2px solid #ff9000;
    }
  }
`;
