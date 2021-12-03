/* eslint-disable @typescript-eslint/ban-types */
import React, { useState } from 'react';

import { Container, ContainerTab } from './styles';

const SideBar = () => {
  const [selectedTab, setSelectedTab] = useState(0)

  const SideBarTabs = [
    {
      title: 'Dashboard',
      icon: require('../../assets/icon-dashboard.svg')
    },
    {
      title: 'Eventos',
      icon: require('../../assets/icon-events.svg')
    },
    {
      title: 'Publicações',
      icon: require('../../assets/icon-publications.svg')
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
        <ContainerTab onClick={ () => setSelectedTab(index) } style={ selectedTab === index ? styleSelectedTab : {} }>
          <img src={ tab.icon } alt={ tab.title } />
          <span>{ tab.title }</span>
        </ContainerTab>
      ))}

    </Container>
  );
};

export default SideBar;
