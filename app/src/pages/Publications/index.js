import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { useToast } from '../../hooks/ToastContext';

import SideBar from '../../components/SideBar';
import Navbar from '../../components/Navbar';
import Loader from '../../components/Loader'

import Modal from '@mui/material/Modal';

import api from '../../services/api';

import {
  Container,
  ContainerPublications,
  ContainerHeader,
  ListPublications,
  CardPublication,
  TitlePublication,
  DescriptionSpan,
  CreatedBySpan,
  ContainerButtons,
  ContainerModal,
} from './styles';

const Publications = () => {
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

  const [dataPublications, setDataPublications] = useState([])
  const [quantityPublications, setQuantityPublications] = useState()
  const [queryParams, setQueryParams] = useState({})

  async function buscarPublicacoes() {
    try {
      setIsLoaderActive(true)
      if (!location.search) {
        location.search = '?page=1&limit=8'
      }
      await api.get(`/publications${location.search}`).then(publication => setDataPublications(publication.data));
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

  async function getQuantityPublications() {
    try {
      await api.get('/publications/quantity/getTotalPublications').then(quantity => 
        setQuantityPublications(Math.ceil(quantity.data / 6))
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
    buscarPublicacoes()
    setQueryParams(queryString.parse(location.search))
  }, [location.search])

  useEffect(() => {
    setQueryParams(queryString.parse(location.search))
    if (!location.search) {
      history.push('/publicacoes?page=1&limit=8')
    }

    buscarPublicacoes()
    getQuantityPublications()
  }, [])

  const styleSelectedButton = {
    backgroundColor: '#6DAEFB',
    border: '1px solid #6DAEFB',
    color: '#FFFFFF',
  }

  function renderButtons() {
    const buttons = []

    for (let index = 1; index <= quantityPublications; index++) {
      buttons.push(
        <button
          style={ Number(queryParams.page) === index ? styleSelectedButton : {} }
          key={ index }
          onClick={ () => history.push(`publicacoes?page=${index}&limit=8`) }
        >
          { index }
        </button>
      )
    }

    return buttons
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

      {isLoaderActive && (
        <Loader />
      )}

      <ContainerPublications>
        <ContainerHeader>
          <h1>Publicações recentes</h1>
          {user && (user.role === 'admin' || user.role === 'professor') && (
            <button onClick={ () => {
              history.push('criar-publicacoes')
            } }>Criar Publicação</button>
          ) }
        </ContainerHeader>
        
        {quantityPublications === 0 && (
          <h4>Não há publicações ainda.</h4>
        )}

        <ListPublications>
          {!!dataPublications && dataPublications.map((event, index) => (
            <CardPublication
              key={index}
              onClick={ () => {
                if ('user' === 'admin') {

                } else {
                  setPublicationSelected(event)
                  handleOpen()
                }
              } }
            >
              <TitlePublication>{ event.title }</TitlePublication>

              <DescriptionSpan>{ add3Dots(event.description, 150) }</DescriptionSpan>

              <CreatedBySpan>{ event.user }</CreatedBySpan>
            </CardPublication>
          ))}
          {!dataPublications && (
            <h1>Nenhuma publicação</h1>
          )}
        </ListPublications>

        {!!quantityPublications && quantityPublications > 0 && (
          <ContainerButtons>
            {renderButtons()}

            {Number(queryParams.page) < quantityPublications && (
              <button onClick={ () => history.push(`publicacoes?page=${Number(queryParams.page) + 1}&limit=8`) }>Próximo</button>
            )}
            {Number(queryParams.page) + 1 > quantityPublications && Number(queryParams.page) !== 1 && (
              <button onClick={ () => history.push(`publicacoes?page=${Number(queryParams.page) - 1}&limit=8`) }>Voltar</button>
            )}
          </ContainerButtons>
        )}
      </ContainerPublications>

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

export default Publications;
