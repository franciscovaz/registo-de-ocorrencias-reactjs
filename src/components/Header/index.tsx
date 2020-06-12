import React from 'react';

import { Container, HeaderContent, MenuItems } from './styles';

import imgLogo from '../../assets/logo.svg';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

const Header: React.FC = ({ children }) => {
  const { signOut } = useAuth();
  return (
    <Container>
      {children}
      <HeaderContent>
        <img src={imgLogo} alt="Registo de ocorrencias" />
        <MenuItems>
          <Link to="/create-occurrence">Registar Ocorrência</Link>
          <Link to="/list-occurrences">Listar Ocorrêncis</Link>
        </MenuItems>

        <button type="button" onClick={signOut}>
          <FiPower />
        </button>
      </HeaderContent>
    </Container>
  );
};

export default Header;
