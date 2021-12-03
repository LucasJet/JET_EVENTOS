import React from 'react';
import SideBar from '../../components/SideBar';
import Navbar from '../../components/Navbar';
import {
  Container,
  ContainerDashboard,
  ContainerGraphics,
  ContainerCards,
  Card,
  InfoCard,
  InfoTotal,
} from './styles';

const Dashboard = () => {
  const graphicsCards = [
    {
      icon: require('../../assets/icon-graph-student.svg'),
      title: 'Alunos matriculados',
      total: 62,
      porcent: null
    },
    {
      icon: require('../../assets/icon-graph-undeperforming.svg'),
      title: 'Alunos ausentes',
      total: 9,
      porcent: '22,5%'
    },
    {
      icon: require('../../assets/icon-graph-average.svg'),
      title: 'Alunos totais',
      total: 40,
      porcent: null
    },
    {
      icon: require('../../assets/icon-graph-upperforming.svg'),
      title: 'Alunos presentes',
      total: 31,
      porcent: '87,5%'
    },
    {
      icon: require('../../assets/icon-graph-clock.svg'),
      title: 'Horas utilizadas em eventos',
      total: 139,
      porcent: null
    },
  ]

  return (
    <Container>
      <SideBar/>
      <Navbar/>

      <ContainerDashboard>
        <h1>Dashboard</h1>

        <ContainerGraphics>
          <ContainerCards>
            {graphicsCards.map((card) => (
              <Card>
                <img src={ card.icon } />

                <InfoCard>
                  <InfoTotal>
                    <h3>{ card.total }</h3>
                    <h4>{ card.porcent ? card.porcent : '' }</h4>
                  </InfoTotal>
                  <span>{ card.title } </span>
                </InfoCard>
              </Card>
            ))}
          </ContainerCards>
        </ContainerGraphics>
      </ContainerDashboard>
    </Container>
  );
};

export default Dashboard;
