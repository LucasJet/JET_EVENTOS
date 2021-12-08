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
      title: document.getElementById('name-event').value,
      description: document.getElementById('description-event').value,
      date: document.getElementById('date-event').value,
      hour_from: document.getElementById('hour-from-event').value,
      hour_to: document.getElementById('hour-to-event').value,
      required: document.getElementById('attendence-event').value,
      userId: document.getElementById('name-event').value,
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

            <form onSubmit={ () =>createEvent() }>
              <LabelFormInput htmlFor="name-event">
                Nome do evento
                <input
                  id="name-event"
                  type="text"
                  required
                />
              </LabelFormInput>

              <LabelFormInput htmlFor="link-event">
                Link da imagem (comeca com http://)
                <input
                  id="link-event"
                  type="text"
                  required
                />
              </LabelFormInput>

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
                  <input id="date-event" type="date" required/>
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
                <input id="attendence-event" type="checkbox" required/>
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
