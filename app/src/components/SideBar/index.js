import React from 'react';

import { Container, ContainerTab } from './styles';

import { useHistory, useLocation } from 'react-router-dom'

const SideBar = () => {
  const history = useHistory()
  const location = useLocation()

  const SideBarTabs = [
    {
      titleUser: 'Início',
      titleAdmin: 'Dashboard',
      icon: require('../../assets/icon-dashboard.svg'),
      urlUser: '/inicio',
      urlAdmin: '/dashboard'
    },
    {
      titleUser: 'Eventos',
      titleAdmin: 'Eventos',
      icon: require('../../assets/icon-events.svg'),
      urlUser: '/eventos',
      urlAdmin: '/eventos',
      routeCreate: '/criar-eventos'
    },
    {
      titleUser: 'Publicações',
      titleAdmin: 'Publicações',
      icon: require('../../assets/icon-publications.svg'),
      urlUser: '/publicacoes',
      urlAdmin: '/publicacoes',
      routeCreate: '/criar-publicacoes'
    },
  ]

  const styleSelectedTab = {
    background: '#40414E',
    border: '1px solid rgba(0, 0, 0, 0.18)',
    boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
    width: '100%',
    borderLeft: '4px solid #1E6FAB',
  }

  const admin = false;

  return (
    <Container>
      <img id="logo-jet" src={ require('../../assets/logo-jet.svg') } alt="Logo jet" />

      {SideBarTabs.map((tab, index) => (
        <ContainerTab
          onClick={ () => {
            history.push(admin ? tab.urlAdmin : tab.urlUser)
          } }
          style={
            location.pathname === tab.urlAdmin
            ||  location.pathname === tab.urlUser
            ||  location.pathname === tab.routeCreate
            ? styleSelectedTab : {}
          }
          key={ index }
        >
          <img src={ tab.icon } alt={ admin ? tab.titleAdmin : tab.titleUser } />
          <span>{ admin ? tab.titleAdmin : tab.titleUser }</span>
        </ContainerTab>
      ))}

    </Container>
  );
};

export default SideBar;
