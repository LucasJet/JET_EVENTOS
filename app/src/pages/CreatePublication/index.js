import React from 'react';
import { useHistory } from 'react-router-dom'

import SideBar from '../../components/SideBar';
import Navbar from '../../components/Navbar';

import api from '../../services/api';

import {
  Container,
  ContainerCreatePublication,
  CardCreatePublication,
  HeaderCard,
  FormContainerPublication,
  LabelFormInput,
  FooterSave,
} from './styles';

const CreatePublication = () => {
  const history = useHistory()

  async function createPublication() {
    const body = {
      title: document.getElementById('name-publication').value,
      description: document.getElementById('description-publication').value,
    }

    console.log(body);
    await api.post('/publicacoes', body);
  }

  return (
    <Container>
      <SideBar/>
      <Navbar/>

      <ContainerCreatePublication>
        <CardCreatePublication>
          <HeaderCard>
            <img
              src={ require('../../assets/icon-arrow-blue.svg')}
              onClick={ () => {
                history.goBack()
              } }
            />
            <h3>Criar publicações</h3>
          </HeaderCard>

          <FormContainerPublication>
            <h2>Dados da publicação</h2>

            <hr />

            <form onSubmit={ () =>createPublication() }>
              <div>
                <LabelFormInput htmlFor="name-event">
                  Assunto da publicação
                  <input
                    id="name-publication"
                    type="text"
                    required
                  />
                </LabelFormInput>

                <LabelFormInput htmlFor="description-event">
                  Descrição
                  <textarea
                    id="description-publication"
                    type="text"
                    required
                  />
                </LabelFormInput>
              </div>

              <FooterSave>
                <div>
                  <img src={ require('../../assets/icon-alert.svg') } />
                  <div>
                    <span>Importante!</span>
                    <span>Preencha todos os dados</span>
                  </div>
                </div>

                <button type="submit">Criar publicação</button>
              </FooterSave>
            </form>
          </FormContainerPublication>
        </CardCreatePublication>
      </ContainerCreatePublication>
    </Container>
  );
};

export default CreatePublication;
