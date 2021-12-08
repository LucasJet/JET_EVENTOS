import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useToast } from '../../hooks/ToastContext';

import SideBar from '../../components/SideBar';
import Navbar from '../../components/Navbar';
import Loader from '../../components/Loader'

import api from '../../services/api';

import ptBR from "date-fns/locale/pt-BR";
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
  Container,
  ContainerCreateEvent,
  CardCreateEvent,
  HeaderCard,
  FormContainerEvent,
  LabelFormInput,
  ContainerDate,
  FooterSave,
} from './styles';

const CreateEvent = () => {
  const history = useHistory()
  const { addToast } = useToast();
  const [isLoaderActive, setIsLoaderActive] = useState(false)

  const [date, setDate] = useState(new Date());
  registerLocale("pt-BR", ptBR);

  async function createEvent() {
    try {
      setIsLoaderActive(true)
      let formatedData = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

      console.log(document.getElementById('email'));
  
      const body = {
        fullname: document.getElementById('fullname').value,
        date_birth: formatedData,
        email: document.getElementById('email').value,
        city: document.getElementById('city').value,
        school: document.getElementById('school').value,
        role: document.getElementById('role').value,
      }
  
      await api.post('/users', body);
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
        title: 'Usuário criado com sucesso!',
      });

      limparCampos()
    }
  }

  function limparCampos() {
    document.getElementById('fullname').value = ''
    setDate(new Date())
    document.getElementById('email').value = ''
    document.getElementById('city').value = ''
    document.getElementById('school').value = ''
    document.getElementById('role').value = ''
  }

  return (
    <Container>
      <SideBar/>
      <Navbar/>

      {isLoaderActive && (
        <Loader />
      )}

      <ContainerCreateEvent>
        <CardCreateEvent>
          <HeaderCard>
            <img
              src={ require('../../assets/icon-arrow-blue.svg')}
              alt="Arrow icon"
              onClick={ () => {
                history.goBack()
              } }
            />
            <h3>Criar Usuários</h3>
          </HeaderCard>

          <FormContainerEvent>
            <h2>Dados do usuário</h2>

            <hr />

            <form onSubmit={ (e) => {
              e.preventDefault()
              createEvent()
            } }
            >
              <LabelFormInput htmlFor="fullname">
                Nome do usuário
                <input
                  id="fullname"
                  type="text"
                  required
                />
              </LabelFormInput>

              <ContainerDate>
                <LabelFormInput>
                  Data de nascimento
                  <ReactDatePicker
                    selected={ date }
                    onChange={ setDate }
                    locale="pt-BR"
                    dateFormat="dd/MM/yyyy"
                  />
                </LabelFormInput>
              </ContainerDate>

              <LabelFormInput htmlFor="email">
                Email
                <input
                  id="email"
                  type="email"
                  required
                />
              </LabelFormInput>

              <LabelFormInput htmlFor="city">
                Cidade
                <input
                  id="city"
                  type="text"
                  required
                />
              </LabelFormInput>

              <LabelFormInput htmlFor="school">
                Escola
                <input
                  id="school"
                  type="text"
                  required
                />
              </LabelFormInput>

              <LabelFormInput htmlFor="role">
                Role
                <input
                  id="role"
                  type="text"
                  required
                />
              </LabelFormInput>

              <FooterSave>
                <div>
                  <img src={ require('../../assets/icon-alert.svg') } alt="icon-alert" />
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

                <button type="submit">Criar usuário</button>
              </FooterSave>
            </form>
          </FormContainerEvent>
        </CardCreateEvent>
      </ContainerCreateEvent>
    </Container>
  );
};

export default CreateEvent;
