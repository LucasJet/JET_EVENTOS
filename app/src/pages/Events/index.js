import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import Modal from '@mui/material/Modal';

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
  ContainerButtons,
  ContainerModal,
  TitlePublication,
  DescriptionSpan,
  CardContent,
} from './styles';

const Events = () => {
  const history = useHistory()

  const [selectedPublication, setPublicationSelected] = useState({})

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dataListEvents = [
    {
      img: require('../../assets/lab-direito-onto.png'),
      title: 'Laboratório de Direito e Ontopsicologia abre edital de seleção de acadêmicos',
      description: 'Auditório principal AMF 1, Auditório principal AMF 1, Auditório principal AMF 1, Auditório principal AMF 1, Auditório principal AMF 1, Auditório principal AMF 1, Auditório principal AMF 1, Auditório principal AMF 1, Auditório principal AMF 1, Auditório principal AMF 1.',
      date: '10/02/2022',
      locale: 'Auditório principal AMF 1',
    },
    {
      img: require('../../assets/lab-direito-onto.png'),
      title: 'Laboratório de Direito e Ontopsicologia abre edital de seleção de acadêmicos',
      description: 'Auditório principal AMF 1',
      date: '10/02/2022',
      locale: 'Auditório principal AMF 1',
    },
    {
      img: require('../../assets/lab-direito-onto.png'),
      title: 'Laboratório de Direito e Ontopsicologia abre edital de seleção de acadêmicos',
      description: 'Auditório principal AMF 1',
      date: '10/02/2022',
      locale: 'Auditório principal AMF 1',
    },
    {
      img: require('../../assets/lab-direito-onto.png'),
      title: 'Laboratório de Direito e Ontopsicologia abre edital de seleção de acadêmicos',
      description: 'Auditório principal AMF 1',
      date: '10/02/2022',
      locale: 'Auditório principal AMF 1',
    },
    {
      img: require('../../assets/lab-direito-onto.png'),
      title: 'Laboratório de Direito e Ontopsicologia abre edital de seleção de acadêmicos',
      description: 'Auditório principal AMF 1',
      date: '10/02/2022',
      locale: 'Auditório principal AMF 1',
    },
    {
      img: require('../../assets/lab-direito-onto.png'),
      title: 'Laboratório de Direito e Ontopsicologia abre edital de seleção de acadêmicos',
      description: 'Auditório principal AMF 1',
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
          <button onClick={ () => {
            history.push('criar-eventos')
          } }>Criar Evento</button>
        </ContainerHeader>

        <ListEvents>
          {dataListEvents.map((event, index) => (
            <CardEvent 
              key={index}
              onClick={ () => {
                setPublicationSelected(event)
                handleOpen()
              } }
            >
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

      <Modal
        open={ open }
        onClose={ handleClose }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ContainerModal>
          <TitlePublication>
            { selectedPublication.title }
          </TitlePublication>

          <DescriptionSpan id="modal-modal-description" sx={ { mt: 2 } }>
            { selectedPublication.description }
          </DescriptionSpan>

          <CardContent style={ { margin: '25px 0px 10px 0px' } }>
            <div>
              <img src={ require('../../assets/icon-calendar.svg') } alt="icon calendar"/>
              <span>{ selectedPublication.date }</span>
            </div>

            <div>
              <img src={ require('../../assets/icon-locale.svg') } alt="icon locale"/>
              <span>{ selectedPublication.locale }h</span>
            </div>
          </CardContent>
        </ContainerModal>
      </Modal>
    </Container>
  );
};

export default Events;
