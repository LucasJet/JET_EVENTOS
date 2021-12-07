import React from 'react';

import SideBar from '../../components/SideBar';
import Navbar from '../../components/Navbar';

import {
  Container,
  ContainerEvents,
  ContainerHeader,
  ListEvents,
  CardEvent,
  ImageEvent,
  InfoEvent,
  ContainerButtons
} from './styles';

const Events = () => {
  const dataListEvents = [
    {
      img: require('../../assets/lab-direito-onto.png'),
      title: 'Laboratório de Direito e Ontopsicologia abre edital de seleção de acadêmicos',
      date: '10/02/2022',
      locale: 'Auditório principal AMF 1',
    },
    {
      img: require('../../assets/lab-direito-onto.png'),
      title: 'Laboratório de Direito e Ontopsicologia abre edital de seleção de acadêmicos',
      date: '10/02/2022',
      locale: 'Auditório principal AMF 1',
    },
    {
      img: require('../../assets/lab-direito-onto.png'),
      title: 'Laboratório de Direito e Ontopsicologia abre edital de seleção de acadêmicos',
      date: '10/02/2022',
      locale: 'Auditório principal AMF 1',
    },
    {
      img: require('../../assets/lab-direito-onto.png'),
      title: 'Laboratório de Direito e Ontopsicologia abre edital de seleção de acadêmicos',
      date: '10/02/2022',
      locale: 'Auditório principal AMF 1',
    },
    {
      img: require('../../assets/lab-direito-onto.png'),
      title: 'Laboratório de Direito e Ontopsicologia abre edital de seleção de acadêmicos',
      date: '10/02/2022',
      locale: 'Auditório principal AMF 1',
    },
    {
      img: require('../../assets/lab-direito-onto.png'),
      title: 'Laboratório de Direito e Ontopsicologia abre edital de seleção de acadêmicos',
      date: '10/02/2022',
      locale: 'Auditório principal AMF 1',
    }
  ]

  const styleSelectedButton = {
    backgroundColor: '#6DAEFB',
    border: '1px solid #6DAEFB',
    color: '#FFFFFF',
  }

  return (
    <Container>
      <SideBar/>
      <Navbar/>

      <ContainerEvents>
        <ContainerHeader>
          <h1>Eventos recentes</h1>
          <button>Criar Evento</button>
        </ContainerHeader>

        <ListEvents>
          {dataListEvents.map((event, index) => (
            <CardEvent key={index}>
              <ImageEvent>
                <img src={ event.img } alt="Imagem evento"/>
              </ImageEvent>
              <InfoEvent>
                <h3>{ event.title }</h3>

                <div>
                  <img src={ require('../../assets/icon-calendar.svg') } alt="icon calendar"/>
                  <span>{ event.date }</span>
                </div>

                <div>
                  <img src={ require('../../assets/icon-locale.svg') } alt="icon locale"/>
                  <span>{ event.locale }</span>
                </div>
              </InfoEvent>
            </CardEvent>
          ))}
        </ListEvents>

        <ContainerButtons>
          <button style={ styleSelectedButton }>1</button>
          <button>2</button>
          <button>Próximo</button>
        </ContainerButtons>
      </ContainerEvents>
    </Container>
  );
};

export default Events;
