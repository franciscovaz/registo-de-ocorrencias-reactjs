import React from 'react';

import { Container, HeaderContent, MenuItems } from './styles';

import imgLogo from '../../assets/logo.svg';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

interface HeaderProps {
  page?: 'list' | 'register';
}

const Header: React.FC<HeaderProps> = ({ page = 'list' }: HeaderProps) => {
  const { signOut } = useAuth();

  return (
    <Container>
      <HeaderContent>
        <img src={imgLogo} alt="Registo de ocorrencias" />
        <MenuItems>
          <Link
            className={page === 'register' ? 'underline' : ''}
            to="/create-occurrence"
          >
            Registar Ocorrência
          </Link>
          <Link
            className={page === 'list' ? 'underline' : ''}
            to="/list-occurrences"
          >
            Listar Ocorrêncis
          </Link>
        </MenuItems>

        <button type="button" onClick={signOut}>
          <FiPower />
        </button>
      </HeaderContent>
    </Container>
  );
};

export default Header;
