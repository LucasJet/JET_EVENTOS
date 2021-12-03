import React, { useRef, useCallback, useState, useEffect} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineProfile } from 'react-icons/ai';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory, useParams } from 'react-router-dom';
import Loader from "react-loader-spinner";

import { useAuth } from '../../../hooks/AuthContext';
import { useToast } from '../../../hooks/ToastContext';

import getValidationErrors from '../../../utils/getValidationErros';
import api from '../../../services/api';

import banner from '../../../assets/banner.jpg';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Content, AnimationContainer, Loading } from './styles';

interface CreateExpenseFormData {
  cod_despesa: number;
  desc_despesa: string;
}

interface RouteParams {
  cod_despesa: string;
}

const CreateExpense: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [expense, setExpense] = useState<CreateExpenseFormData>({
    cod_despesa: 0,
    desc_despesa: ''
  });
  const { cod_despesa } = useParams<RouteParams>();

  async function getData() {
    try {
      await api.get(`/despesas/${cod_despesa}`)
        .then(response => {
          if(response.data != null){
          const expense = response.data;
          setExpense(expense);
          } else {
            history.push('/dashboard')
          }
        })
    } catch (err) { 
      history.push('/dashboard');
    }
  }

  useEffect(() => {
    try {
      const delay = 3;
      getData();
      const timer1 = setTimeout(() => setLoading(false), delay * 1000);
      return () => {
        clearTimeout(timer1);
      };
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro na Atualização',
        description: `Erro na requisição realizada`,
      });

      history.push('/dashboard');
    }
  }, []);

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

        await api.put(`/despesas/${cod_despesa}`, data);

        addToast({
          type: 'success',
          title: 'Operação realizada com sucesso!',
          description: 'O cadastro no sistema foi atualizado corretamente!',
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
      {loading &&
        <Loading>
          <Loader
            type="BallTriangle"
            color="#00BFFF"
            height={140}
            width={140}
            timeout={3000} //3 secs
          />
        </Loading>
      }
      <Content>
        <AnimationContainer>
          <img src={banner} style={{borderRadius: '8px'}} alt="Banner" />

          <Form 
          ref={formRef} 
          onSubmit={handleSubmit}
          initialData={{
            desc_despesa: expense && expense.desc_despesa
          }}
          >
            <h1>Receitas</h1>
            <Input name="desc_despesa" maxLength={45} icon={AiOutlineProfile} placeholder="Descrição da Despesa" />

            <Button type="submit">Atualizar</Button>
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
