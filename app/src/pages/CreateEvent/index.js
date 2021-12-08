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
  AttendanceMandatory,
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
  
      const body = {
        title: document.getElementById('name-event').value,
        locale: document.getElementById('locale-event').value,
        description: document.getElementById('description-event').value,
        date: formatedData,
        hour_from: document.getElementById('hour-from-event').value,
        hour_to: document.getElementById('hour-to-event').value,
        required: document.getElementById('attendence-event').checked,
      }
  
      await api.post('/events', body);
      
      addToast({
        type: 'success',
        title: 'Evento criado com sucesso!',
      });
    } catch (error) {
      setIsLoaderActive(false)
      addToast({
        type: 'error',
        title: 'Erro interno na aplicação',
        description: error.message ?? '',
      });
    } finally {
      setIsLoaderActive(false)
      limparCampos()
    }
  }

  function limparCampos() {
    document.getElementById('name-event').value = ''
    document.getElementById('locale-event').value = ''
    document.getElementById('description-event').value = ''
    setDate(new Date())
    document.getElementById('hour-from-event').value = ''
    document.getElementById('hour-to-event').value = ''
    document.getElementById('attendence-event').checked = false
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
            <h3>Criar eventos</h3>
          </HeaderCard>

          <FormContainerEvent>
            <h2>Dados do evento</h2>

            <hr />

            <form onSubmit={ (e) => {
              e.preventDefault()
              createEvent()
            } }
            >
              <LabelFormInput htmlFor="name-event">
                Nome do evento
                <input
                  id="name-event"
                  type="text"
                  required
                />
              </LabelFormInput>

              <LabelFormInput htmlFor="locale-event">
                Local do evento
                <input
                  id="locale-event"
                  type="text"
                  required
                />
              </LabelFormInput>

              {/* <LabelFormInput htmlFor="link-event">
                Link da imagem (comeca com http://)
                <input
                  id="link-event"
                  type="text"
                  required
                />
              </LabelFormInput> */}

              <LabelFormInput htmlFor="description-event">
                Descrição
                <textarea
                  id="description-event"
                  type="text"
                  required
                />
              </LabelFormInput>

              <ContainerDate>
                <LabelFormInput htmlFor="date-event">
                  Data
                  <ReactDatePicker
                    selected={ date }
                    onChange={ setDate }
                    locale="pt-BR"
                    dateFormat="dd/MM/yyyy"
                  />
                </LabelFormInput>

                <LabelFormInput htmlFor="hour-from-event">
                  Das
                  <input id="hour-from-event" type="time" required/>
                </LabelFormInput>

                <LabelFormInput htmlFor="hour-to-event">
                  Até
                  <input id="hour-to-event" type="time" required/>
                </LabelFormInput>
              </ContainerDate>

              <AttendanceMandatory htmlFor="attendence-event">
                <input id="attendence-event" type="checkbox" />
                Presença obrigatória?
              </AttendanceMandatory>

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

                <button type="submit">Criar evento</button>
              </FooterSave>
            </form>
          </FormContainerEvent>
        </CardCreateEvent>
      </ContainerCreateEvent>
    </Container>
  );
};

export default CreateEvent;
