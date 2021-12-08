import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useToast } from '../../hooks/ToastContext';

import SideBar from '../../components/SideBar';
import Navbar from '../../components/Navbar';
import Loader from '../../components/Loader'

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
  const { addToast } = useToast();
  const [isLoaderActive, setIsLoaderActive] = useState(false)

  async function createPublication() {
    try {
      setIsLoaderActive(true)
      const body = {
        title: document.getElementById('name-publication').value,
        description: document.getElementById('description-publication').value,
      }
      
      await api.post('/publications', body);
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
        title: 'Publicação criada com sucesso!',
      });

      limparCampos()
    }
  }

  function limparCampos() {
    document.getElementById('name-publication').value = ''
    document.getElementById('description-publication').value = ''
  }

  return (
    <Container>
      <SideBar/>
      <Navbar/>

      {isLoaderActive && (
        <Loader />
      )}

      <ContainerCreatePublication>
        <CardCreatePublication>
          <HeaderCard>
            <img
              src={ require('../../assets/icon-arrow-blue.svg')}
              alt="Arrow icon"
              onClick={ () => {
                history.goBack()
              } }
            />
            <h3>Criar publicações</h3>
          </HeaderCard>

          <FormContainerPublication>
            <h2>Dados da publicação</h2>

            <hr />

            <form onSubmit={ (e) => {
              e.preventDefault()
              createPublication()
            } }>
              <div>
                <LabelFormInput htmlFor="name-publication">
                  Assunto da publicação
                  <input
                    id="name-publication"
                    type="text"
                    required
                  />
                </LabelFormInput>

                <LabelFormInput htmlFor="description-publication">
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
                  <img src={ require('../../assets/icon-alert.svg') } alt="Alert icon" />
                  <div>
                    <span>Importante!</span>
                    <span>Preencha todos os dados</span>
                  </div>
                </div>

                <button
                  type="button"
                  style={ { background: 'gray'} }
                  onClick={ () => limparCampos() }
                >Limpar campos</button>

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
