/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';

import { Container, ContainerName } from './styles';

const Navbar = () => {

  return (
    <Container>
      <ContainerName>
        <h3>Lucas Rodrigues</h3>
        <span>Administrador</span>
      </ContainerName>

      <img id="logo-avatar" src={ require('../../assets/icon-avatar.svg') } alt="Logo avatar" />

      <img id="icon-arrow" src={ require('../../assets/icon-arrow.svg') } alt="Icon arrow" />

      <hr />

      <img id="icon-notifications" src={ require('../../assets/icon-notifications.svg') } alt="Icon notifications" />

      <img id="icon-logout" src={ require('../../assets/icon-logout.svg') } alt="Icon logout" />
      
    </Container>
  );
};

export default Navbar;
