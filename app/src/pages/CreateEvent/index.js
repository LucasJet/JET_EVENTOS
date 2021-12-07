import React from 'react';
import { useHistory } from 'react-router-dom'

import SideBar from '../../components/SideBar';
import Navbar from '../../components/Navbar';

import api from '../../services/api';

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

  async function createEvent() {
    const body = {
      "title": document.getElementById('name-event').value,
      "description": document.getElementById('description-event').value,
      "date": document.getElementById('date-event').value,
      "hour_from": document.getElementById('hour-from-event').value,
      "hour_to": document.getElementById('hour-to-event').value,
      "required": document.getElementById('attendence-event').value,
      "userId": document.getElementById('name-event').value,
    }

    console.log(body);
    await api.post('/events', body);
  }

  return (
    <Container>
      <SideBar/>
      <Navbar/>

      <ContainerCreateEvent>
        <CardCreateEvent>
          <HeaderCard>
            <img
              src={ require('../../assets/icon-arrow-blue.svg')}
              onClick={ () => {
                history.goBack()
              } }
            />
            <h3>Criar eventos</h3>
          </HeaderCard>

          <FormContainerEvent>
            <h2>Dados do evento</h2>

            <hr />

            <LabelFormInput for="name-event">
              Nome do evento
              <input id="name-event" type="text"/>
            </LabelFormInput>

            <LabelFormInput for="link-event">
              Link da imagem (comeca com http://)
              <input id="link-event" type="text"/>
            </LabelFormInput>

            <LabelFormInput for="description-event">
              Descrição
              <textarea id="description-event" type="text"/>
            </LabelFormInput>

            <ContainerDate>
              <LabelFormInput for="date-event">
                Data
                <input id="date-event" type="date"/>
              </LabelFormInput>

              <LabelFormInput for="hour-from-event">
                Das
                <input id="hour-from-event" type="time"/>
              </LabelFormInput>

              <LabelFormInput for="hour-to-event">
                Até
                <input id="hour-to-event" type="time"/>
              </LabelFormInput>
            </ContainerDate>

            <AttendanceMandatory for="attendence-event">
              <input id="attendence-event" type="checkbox"/>
              Presença obrigatória?
            </AttendanceMandatory>

            <FooterSave>
              <div>
                <img src={ require('../../assets/icon-alert.svg') } />
                <div>
                  <span>Importante!</span>
                  <span>Preencha todos os dados</span>
                </div>
              </div>

              <button type="button" onClick={ () => createEvent() }>Salvar cadastro</button>
            </FooterSave>
            
          </FormContainerEvent>
        </CardCreateEvent>
      </ContainerCreateEvent>
    </Container>
  );
};

export default CreateEvent;
