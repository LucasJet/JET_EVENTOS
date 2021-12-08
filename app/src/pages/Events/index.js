import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { useToast } from '../../hooks/ToastContext';

import Modal from '@mui/material/Modal';

import SideBar from '../../components/SideBar';
import Navbar from '../../components/Navbar';
import Loader from '../../components/Loader'

import api from '../../services/api';

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
  const location = useLocation()
  const { addToast } = useToast();

  const [user, setUser] = useState()
  const [isLoaderActive, setIsLoaderActive] = useState(false)

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('@JET:user')))
  }, [])

  const [selectedPublication, setPublicationSelected] = useState({})

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [dataEvents, setDataEvents] = useState([])
  const [quantityEvents, setQuantityEvents] = useState()
  const [queryParams, setQueryParams] = useState({})

  async function buscarEventos() {
    try {
      setIsLoaderActive(true)
      if (!location.search) {
        location.search = '?page=1&limit=8'
      }

      await api.get(`/events${location.search}`).then(events => setDataEvents(events.data));
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

  async function getQuantityEvents() {
    try {
      await api.get('/events/quantity/getTotalEvents').then(quantity => 
        setQuantityEvents(Math.ceil(quantity.data / 8))
      );
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro interno na aplicação',
        description: error.message ?? '',
      });
    }
  }

  useEffect(() => {
    buscarEventos()
    setQueryParams(queryString.parse(location.search))
  }, [location.search])

  useEffect(() => {
    setQueryParams(queryString.parse(location.search))
    if (!location.search) {
      history.push('/eventos?page=1&limit=8')
    }

    buscarEventos()
    getQuantityEvents()
  }, [])
  
  const styleSelectedButton = {
    backgroundColor: '#6DAEFB',
    border: '1px solid #6DAEFB',
    color: '#FFFFFF',
  }

  function renderButtons() {
    const buttons = []

    for (let index = 1; index <= quantityEvents; index++) {
      buttons.push(
        <button
          style={ Number(queryParams.page) === index ? styleSelectedButton : {} }
          key={ index }
          onClick={ () => history.push(`eventos?page=${index}&limit=8`) }
        >
          { index }
        </button>
      )
    }

    return buttons
  }

  useEffect(() => {
    console.log(quantityEvents);
  }, [quantityEvents])

  return (
    <Container>
      <SideBar/>
      <Navbar/>

      {isLoaderActive && (
        <Loader />
      )}

      <ContainerEvents>
        <ContainerHeader>
          <h1>Eventos recentes</h1>
          {user && (user.role === 'admin' || user.role === 'professor') && (
            <button onClick={ () => {
              history.push('criar-eventos')
            } }>Criar Evento</button>
          )}
        </ContainerHeader>


        {quantityEvents === 0 && (
          <h4>Não há eventos ainda.</h4>
        )}

        <ListEvents>
          {!!dataEvents && dataEvents.map((event, index) => (
            <CardEvent 
              key={index}
              onClick={ () => {
                setPublicationSelected(event)
                handleOpen()
              } }
            >
              <ImageEvent>
                <img src={ require('../../assets/logo-amf-transparente.png') } alt="Imagem evento"/>
              </ImageEvent>
              <InfoEvent>
                <h3>{ event.title }</h3>

                <div style={{ flexDirection: 'column' }}>
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
                </div>
              </InfoEvent>
            </CardEvent>
          ))}
        </ListEvents>

        {!!quantityEvents && quantityEvents > 0 && (
          <ContainerButtons>
            {renderButtons()}

            {Number(queryParams.page) < quantityEvents && (
              <button onClick={ () => history.push(`eventos?page=${Number(queryParams.page) + 1}&limit=8`) }>Próximo</button>
            )}
            {Number(queryParams.page) + 1 > quantityEvents && Number(queryParams.page) !== 1 && (
              <button onClick={ () => history.push(`eventos?page=${Number(queryParams.page) - 1}&limit=8`) }>Voltar</button>
            )}
          </ContainerButtons>
        )}
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
              { selectedPublication.date ? selectedPublication.date + ' ' + selectedPublication.hour_from + ' - ' + selectedPublication.hour_to : 'A definir.' }
            </div>

            <div>
              <img src={ require('../../assets/icon-locale.svg') } alt="icon locale"/>
              <span>{ selectedPublication.locale ? selectedPublication.locale : 'Local ainda não informado.' }</span>
            </div>
          </CardContent>
        </ContainerModal>
      </Modal>
    </Container>
  );
};

export default Events;
