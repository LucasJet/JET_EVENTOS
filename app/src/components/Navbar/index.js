/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';

import { Container, ContainerName } from './styles';

const Navbar = () => {
  const { signOut } = useAuth();
  const [user, setUser] = useState()
  const { addToast } = useToast();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('@JET:user')))
  }, [])
  
  return (
    <Container>
      <ContainerName>
        <h3>{ user ? user.fullname : '' }</h3>
        <span>{ user ? user.role : '' }</span>
      </ContainerName>

      <img id="logo-avatar" src={ require('../../assets/icon-avatar.svg') } alt="Logo avatar" />

      {/* <img id="icon-arrow" src={ require('../../assets/icon-arrow.svg') } alt="Icon arrow" /> */}

      <hr />

      {/* <img id="icon-notifications" src={ require('../../assets/icon-notifications.svg') } alt="Icon notifications" /> */}

      <img
        id="icon-logout"
        src={ require('../../assets/icon-logout.svg') }
        alt="Icon logout"
        onClick={ () => {
          signOut()
          addToast({
            type: 'success',
            title: 'Deslogado com sucesso!',
          });
        } }  
      />
      
    </Container>
  );
};

export default Navbar;
