import React, { useState } from 'react';

import SideBar from '../../components/SideBar';
import Navbar from '../../components/Navbar';

import Modal from '@mui/material/Modal';

import {
  Container,
  ContainerStudent,
  ContainerHeader,
  ListEvents,
  CardEvent,
  CardContent,
  DescriptionSpan,
  ListPublications,
  CardPublication,
  TitlePublication,
  ContainerModal,
  CreatedBySpan,
  ContainerButtonsEvent
} from './styles';

const Events = () => {
  const [selectedPublication, setPublicationSelected] = useState({})

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dataListEvents = [
    {
      title: 'Atitude empreendedora III',
      description: 'Auditório principal AMF 1, Auditório principal AMF 1, Auditório principal AMF 1, Auditório principal AMF 1, Auditório principal AMF 1, Auditório principal AMF 1, Auditório principal AMF 1, Auditório principal AMF 1, Auditório principal AMF 1, Auditório principal AMF 1.',
      date: '10/02/2022',
      time: '08:30'
    },
    {
      title: 'Atitude empreendedora II',
      description: 'Auditório principal AMF 1',
      date: '10/02/2022',
      time: '08:30'
    },
    {
      title: 'Atitude empreendedora I',
      description: 'Auditório principal AMF 1',
      date: '10/02/2022',
      time: '08:30'
    },
  ]

  const dataListPublications = [
    {
      id: 1,
      title: 'Curso grátis na Udemy',
      description: 'Curso front-end ReactJs. Curso front-end ReactJs. Curso front-end ReactJs. Curso front-end ReactJs. Curso front-end ReactJs. Curso front-end ReactJs. ',
      createdBy: 'Lucas Rodrigues'
    },
    {
      id: 2,
      title: 'Curso grátis na Udemy',
      description: 'Curso front-end ReactJs. Curso front-end ReactJs. Curso front-end ReactJs. Curso front-end ReactJs. Curso front-end ReactJs. Curso front-end ReactJs. Curso front-end ReactJs. Curso front-end ReactJs. Curso front-end ReactJs. Curso front-end ReactJs. Curso front-end ReactJs. Curso front-end ReactJs. ',
      createdBy: 'Lucas Rodrigues'
    },
    {
      id: 3,
      title: 'Curso grátis na Udemy',
      description: 'Curso front-end ReactJs',
      createdBy: 'Lucas Rodrigues'
    },
  ]

  const styleButton = {
    backgroundColor: '#666667',
    border: '1px solid #E6E6F0',
    color: '#FFFFFF',
  }

  function add3Dots(string, limit) {
    let dots = "...";
    if(string.length > limit) {
      string = string.substring(0, limit) + dots;
    }

    return string;
  }

  return (
    <Container>
      <SideBar/>
      <Navbar/>

      <ContainerStudent>
        <div>
          <ContainerHeader>
            <h1>Eventos recentes</h1>
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
                <TitlePublication>{ event.title }</TitlePublication>

                <DescriptionSpan>{ add3Dots(event.description, 150) }</DescriptionSpan>

                <CardContent>
                  <div>
                    <img src={ require('../../assets/icon-calendar.svg') } alt="icon calendar"/>
                    <span>{ event.date }</span>
                  </div>

                  <div>
                    <img src={ require('../../assets/icon-locale.svg') } alt="icon locale"/>
                    <span>{ event.time }h</span>
                  </div>
                </CardContent>

                <ContainerButtonsEvent>
                  <button>Estarei presente</button>
                  <button style={ styleButton }>Não poderei ir</button>
                </ContainerButtonsEvent>
              </CardEvent>
            ))}

          </ListEvents>
        </div>
        <div>
          <ContainerHeader>
            <h1>Publicações recentes</h1>
          </ContainerHeader>

          <ListPublications>
            {dataListPublications.map((event, index) => (
              <CardPublication
                key={ index }
                onClick={ () => {
                  setPublicationSelected(event)
                  handleOpen()
                } }
              >
                <TitlePublication>{ event.title }</TitlePublication>

                <DescriptionSpan>{ add3Dots(event.description, 300) }</DescriptionSpan>
              </CardPublication>
            ))}
          </ListPublications>
        </div>
      </ContainerStudent>

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

          {selectedPublication.time && (
            <>
              <CardContent style={ { margin: '25px 0px 10px 0px' } }>
                <div>
                  <img src={ require('../../assets/icon-calendar.svg') } alt="icon calendar"/>
                  <span>{ selectedPublication.date }</span>
                </div>

                <div>
                  <img src={ require('../../assets/icon-locale.svg') } alt="icon locale"/>
                  <span>{ selectedPublication.time }h</span>
                </div>
              </CardContent>

              <ContainerButtonsEvent>
                <button>Estarei presente</button>
                <button style={ styleButton }>Não poderei ir</button>
              </ContainerButtonsEvent>
            </>
          )}

          {selectedPublication.createdBy && (
            <CreatedBySpan id="modal-modal-description" sx={ { mt: 2 } }>
              Criado por: { selectedPublication.createdBy }
            </CreatedBySpan>
          )}
        </ContainerModal>
      </Modal>
    </Container>
  );
};

export default Events;
