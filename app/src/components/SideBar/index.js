import React, { useEffect, useState } from 'react';

import { Container, ContainerTab } from './styles';

import { useHistory, useLocation } from 'react-router-dom'

const SideBar = () => {
  const history = useHistory()
  const location = useLocation()

  const [user, setUser] = useState()

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('@JET:user')))
  }, [])

  const SideBarTabs = [
    {
      titleUser: 'Início',
      titleAdmin: 'inicio',
      icon: require('../../assets/icon-home.svg'),
      urlUser: '/inicio',
      urlAdmin: '/inicio',
      route: '/inicio',
      private: false,
    },
    {
      titleUser: 'Eventos',
      titleAdmin: 'Eventos',
      icon: require('../../assets/icon-events.svg'),
      urlUser: '/eventos?page=1&limit=8',
      urlAdmin: '/eventos?page=1&limit=8',
      route: '/eventos',
      routeCreate: '/criar-eventos',
      private: false,
    },
    {
      titleUser: 'Publicações',
      titleAdmin: 'Publicações',
      icon: require('../../assets/icon-publications.svg'),
      urlUser: '/publicacoes?page=1&limit=8',
      urlAdmin: '/publicacoes?page=1&limit=8',
      route: '/publicacoes',
      routeCreate: '/criar-publicacoes',
      private: false,
    },
    {
      titleUser: 'Dashboard',
      titleAdmin: 'Dashboard',
      icon: require('../../assets/icon-dashboard.svg'),
      urlUser: '/inicio',
      urlAdmin: '/dashboard',
      route: '/dashboard',
      private: true,
    },
    {
      titleAdmin: 'Criar usuário',
      icon: require('../../assets/icon-user.svg'),
      urlAdmin: '/criar-usuarios',
      routeCreate: '/criar-eventos',
      private: true,
    },
  ]

  const styleSelectedTab = {
    background: '#40414E',
    border: '1px solid rgba(0, 0, 0, 0.18)',
    boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
    width: '100%',
    borderLeft: '4px solid #1E6FAB',
  }

  return (
    <Container>
      <img id="logo-jet" src={ require('../../assets/logo-jet.svg') } alt="Logo jet" />

      {SideBarTabs.map((tab, index) => (
        !tab.private || user && (user.role === 'admin' || user.role === 'professor') ?
        <ContainerTab
          onClick={ () => {
            history.push(
              user.role === 'admin'
              || user.role === 'professor'
              ? tab.urlAdmin : tab.urlUser)
          } }
          style={
            location.pathname === tab.routeCreate
            ||  location.pathname === tab.route
            ||  location.pathname === tab.urlUser
            &&  !(location.pathname === '/inicio' && user && (user.role === 'admin' || user.role === 'professor'))
            ? styleSelectedTab : {}
          }
          key={ index }
        >
          <img src={ tab.icon } alt={ tab.titleUser } />
          <span>
            {user && (user.role === 'admin' || user.role === 'professor')
              ? tab.titleAdmin : tab.titleUser
            }
          </span>
        </ContainerTab>
        : ''
      ))}

    </Container>
  );
};

export default SideBar;
