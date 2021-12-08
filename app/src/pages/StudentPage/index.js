import React, { useEffect, useState } from 'react';
import { useToast } from '../../hooks/ToastContext';
import api from '../../services/api';

import SideBar from '../../components/SideBar';
import Navbar from '../../components/Navbar';
import Loader from '../../components/Loader'

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
  const { addToast } = useToast();
  const [selectedPublication, setPublicationSelected] = useState({})
  const [isLoaderActive, setIsLoaderActive] = useState(false)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [dataPublications, setDataPublications] = useState([])
  const [dataEvents, setDataEvents] = useState([])

  async function buscarEventos() {
    try {
      setIsLoaderActive(true)
      await api.get('/events?page=1&limit=3').then(events => setDataEvents(events.data));
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

  async function buscarPublicacoes() {
    try {
      setIsLoaderActive(true)
      await api.get('/publications?page=1&limit=3').then(publication => setDataPublications(publication.data));
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
    console.log(dataEvents);
  }, [dataEvents])

  useEffect(() => {
    buscarEventos()
    buscarPublicacoes()
  }, [])

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
  
  async function marcarPresenca(status, eventId) {
    try {
      setIsLoaderActive(true)
      const body = {
        status, eventId 
      }

      await api.post('/userEvents', body)
    } catch (error) {
      setIsLoaderActive(false)
      addToast({
        type: 'error',
        title: 'Erro interno na aplicação',
        description: error.message ?? '',
      });
    } finally {
      setIsLoaderActive(false)
      addToast({
        type: 'success',
        title: 'Salvo!',
      });
    }
  }

  return (
    <Container>
      <SideBar/>
      <Navbar/>

      {isLoaderActive && (
        <Loader />
      )}

      <ContainerStudent>
        <div>
          <ContainerHeader>
            <h1>Eventos recentes</h1>
          </ContainerHeader>

          <ListEvents>
            {!!dataEvents && dataEvents.map((event, index) => (
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
                    <span>
                      { event.date ? event.date + ' ' + event.hour_from + ' - ' + event.hour_to : 'A definir.' }
                    </span>
                  </div>

                  <div>
                    <img src={ require('../../assets/icon-locale.svg') } alt="icon locale"/>
                    <span>{ event.locale ? event.locale : 'Local ainda não informado.' }</span>
                  </div>
                </CardContent>

                {event.status === 'Pendente' && (
                  <ContainerButtonsEvent style={ { zIndex: 10 } }>
                    <button onClick={ () => {
                      marcarPresenca(true, event._id)
                      handleClose()
                    } }>Estarei presente</button>
                    <button onClick={ () => {
                      marcarPresenca(false, event._id)
                      handleClose()
                    } } style={ styleButton }>Não poderei ir</button>
                  </ContainerButtonsEvent>
                )}
                {event.status === true && (
                  <span>Você marcou presença nesse evento!</span>
                )}
                {!event.status && (
                  <span>Sentiremos sua falta :(</span>
                )}
              </CardEvent>
            ))}

          </ListEvents>
        </div>
        <div>
          <ContainerHeader>
            <h1>Publicações recentes</h1>
          </ContainerHeader>

          <ListPublications>
            {!!dataPublications && dataPublications.map((publication, index) => (
              <CardPublication
                key={ index }
                onClick={ () => {
                  setPublicationSelected(publication)
                  handleOpen()
                } }
              >
                <TitlePublication>{ publication.title }</TitlePublication>

                <DescriptionSpan>{ add3Dots(publication.description, 300) }</DescriptionSpan>
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

          {selectedPublication.user && (
            <CreatedBySpan id="modal-modal-description" sx={ { mt: 2 } }>
              Criado por: { selectedPublication.user }
            </CreatedBySpan>
          )}
        </ContainerModal>
      </Modal>
    </Container>
  );
};

export default Events;
