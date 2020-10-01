import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

/* import { shade } from 'polished'; */

import { Container } from './styles';

interface SwitchProps {
  toggleTheme(): void;
}

const SwitchComponent: React.FC<SwitchProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.headerBackground}
        onColor={colors.secundary}
      />
    </Container>
  );
};

export default SwitchComponent;
