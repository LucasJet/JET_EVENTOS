import React, { useRef, useCallback} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineProfile } from 'react-icons/ai';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../../hooks/AuthContext';
import { useToast } from '../../../hooks/ToastContext';

import getValidationErrors from '../../../utils/getValidationErros';
import api from '../../../services/api';

import banner from '../../../assets/banner.jpg';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Content, AnimationContainer } from './styles';

interface CreateExpenseFormData {
  desc_despesa: string;
}

const CreateExpense: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: CreateExpenseFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          desc_despesa: Yup.string()
            .required('Campo Obrigatório').max(50)
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        
        await api.post('/despesas', data);

        addToast({
          type: 'success',
          title: 'Operação realizada com sucesso!',
          description: 'O cadastro no sistema foi realizado corretamente!',
        });

        history.push('/dashboard');

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no Cadastro',
          description: `Erro na requisição realizada: ${err.response.data.error}`,
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={banner} style={{borderRadius: '8px'}} alt="Banner" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Despesas</h1>
            <Input name="desc_despesa" maxLength={45} icon={AiOutlineProfile} placeholder="Descrição da Despesa" />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para a página inicial
          </Link>

        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default CreateExpense;
