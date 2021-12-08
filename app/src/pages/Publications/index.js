import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import SideBar from '../../components/SideBar';
import Navbar from '../../components/Navbar';

import Modal from '@mui/material/Modal';

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

  const [selectedPublication, setPublicationSelected] = useState({})

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    {
      id: 4,
      title: 'Curso grátis na Udemy',
      description: 'Curso front-end ReactJs',
      createdBy: 'Lucas Rodrigues'
    },
    {
      id: 5,
      title: 'Curso grátis na Udemy',
      description: 'Curso front-end ReactJs',
      createdBy: 'Lucas Rodrigues'
    },
    {
      id: 6,
      title: 'Curso grátis na Udemy',
      description: 'Curso front-end ReactJs',
      createdBy: 'Lucas Rodrigues'
    },
    {
      id: 7,
      title: 'Curso grátis na Udemy',
      description: 'Curso front-end ReactJs',
      createdBy: 'Lucas Rodrigues'
    },
    {
      id: 8,
      title: 'Curso grátis na Udemy',
      description: 'Curso front-end ReactJs',
      createdBy: 'Lucas Rodrigues'
    },
    {
      id: 9,
      title: 'Curso grátis na Udemy',
      description: 'Curso front-end ReactJs',
      createdBy: 'Lucas Rodrigues'
    },
  ]

  const styleSelectedButton = {
    backgroundColor: '#6DAEFB',
    border: '1px solid #6DAEFB',
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

      <ContainerPublications>
        <ContainerHeader>
          <h1>Publicações recentes</h1>
          <button onClick={ () => {
            history.push('criar-publicacoes')
          } }>Criar Publicação</button>
        </ContainerHeader>

        <ListPublications>
          {dataListPublications.map((event, index) => (
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

              <CreatedBySpan>{ event.createdBy }</CreatedBySpan>
            </CardPublication>
          ))}
        </ListPublications>

        <ContainerButtons>
          <button style={ styleSelectedButton }>1</button>
          <button>2</button>
          <button>Próximo</button>
        </ContainerButtons>
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
          <CreatedBySpan id="modal-modal-description" sx={ { mt: 2 } }>
            Criado por: { selectedPublication.createdBy }
          </CreatedBySpan>
        </ContainerModal>
      </Modal>
    </Container>
  );
};

export default Publications;
