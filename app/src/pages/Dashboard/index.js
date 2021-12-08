import React, { useEffect, useState } from 'react';
import { useToast } from '../../hooks/ToastContext';

import SideBar from '../../components/SideBar';
import Navbar from '../../components/Navbar';
import Loader from '../../components/Loader'

import {
  Container,
  ContainerDashboard,
  ContainerGraphics,
  ContainerCards,
  Card,
  InfoCard,
  InfoTotal,
  ContainerLastEvents,
  HeaderLastEvents,
  ListLastEvents,
} from './styles';

import api from '../../services/api';

const Dashboard = () => {
  const { addToast } = useToast();
  const [dataEvents, setDataEvents] = useState([])
  const [dataDashboard, setDataDashboard] = useState([])
  const [isLoaderActive, setIsLoaderActive] = useState(false)

  async function buscarEventos() {
    try {
      setIsLoaderActive(true)
      await api.get('/events?page=1&limit=8').then(events => setDataEvents(events.data));
    } catch (error) {
      setIsLoaderActive(false)
      addToast({
        type: 'error',
        title: 'Erro interno na aplicação',
        description: error.message ?? '',
      });
    } finally {
      setIsLoaderActive(false)
    }
  }

  async function buscarDataDashboard() {
    try {
      setIsLoaderActive(true)
      await api.get('/users/dashboard/getDashboard').then(dashboard => setDataDashboard(dashboard.data));
    } catch (error) {
      setIsLoaderActive(false)
      addToast({
        type: 'error',
        title: 'Erro interno na aplicação',
        description: error.message ?? '',
      });
    } finally {
      setIsLoaderActive(false)
    }
  }

  useEffect(() => {
    console.log(dataDashboard);
  }, [dataDashboard])

  useEffect(() => {
    buscarEventos()
    buscarDataDashboard()
  }, [])

  return (
    <Container>
      <SideBar/>
      <Navbar/>

      {isLoaderActive && (
        <Loader />
      )}

      <ContainerDashboard>
        <h1>Dashboard</h1>

        <ContainerGraphics>
          <ContainerCards>
            {!!dataDashboard && dataDashboard.map((card, index) => (
              <Card key={ index }>
                <img src={ require(`../../assets/icon-dashboard-${index + 1}.svg`) } alt="Icon card"/>

                <InfoCard>
                  <InfoTotal>
                    <h3>{ card.total }</h3>
                    <h4>{ card.percent ? card.percent + '%' : '' }</h4>
                  </InfoTotal>
                  <span>{ card.title } </span>
                </InfoCard>
              </Card>
            ))}
          </ContainerCards>
          <ContainerLastEvents>
            <HeaderLastEvents>
              <h3>Últimos eventos</h3>

              <select name="select-orderby">
                <option value="ascendente" defaultValue>Ascendente</option>
                <option value="descendente">Descendente</option>
              </select>
            </HeaderLastEvents>

            <hr />

            <ListLastEvents>
              {!!dataEvents && dataEvents.map((event, index) => (
                <span key={ index }>{event.title} -&nbsp;<b>{event.date}</b></span>
              ))}
            </ListLastEvents>
          </ContainerLastEvents>
        </ContainerGraphics>
      </ContainerDashboard>
    </Container>
  );
};

export default Dashboard;
