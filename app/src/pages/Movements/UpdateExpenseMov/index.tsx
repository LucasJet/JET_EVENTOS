import React, { useRef, useCallback, useState, useEffect } from 'react';
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
import DatePicker from '../../../components/DatePicker';
import Button from '../../../components/Button';

import { Container, Content, AnimationContainer, Loading } from './styles';

interface MovementExpenseFormData {
  cod_movimento: number;
  desc_movimento: string;
  dt_movimento: Date;
  valor: string;
  cod_despesa?: number;
  cod_receita?: number;
}

interface OptionsCompany {
  value: string;
  label: string;
}

interface RouteParams {
  cod_movimento: string
}

const CreateMovementExpense: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [movementExpense, setMovementExpense] = useState<MovementExpenseFormData>({
    cod_movimento: 0,
    desc_movimento: '',
    dt_movimento: new Date(),
    valor: '',
  });
  const { cod_movimento } = useParams<RouteParams>();
  const [initialDate, setInitialDate] = useState<Date | null>(new Date());

  async function getData() {
    await api.get(`/movimentos/${cod_movimento}`)
      .then(response => {
        const movementData = response.data;
        setMovementExpense(movementData);
        setInitialDate(new Date(movementData.dt_movimento));
      });
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
        description: `Erro na requisição realizada: ${err.response.data.error}`,
      });

      history.push('/dashboard');
    }
  }, []);

  const handleSubmit = useCallback(
    async (data: MovementExpenseFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          desc_movimento: Yup.string()
            .required('Campo Obrigatório').max(45),
          dt_movimento: Yup.date()
            .required('Campo Obrigatório'),
          valor: Yup.number()
            .required('Campo Obrigatório').min(0).max(9999)
        });

        await schema.validate(data, {
          abortEarly: false,
        });
  
        await api.put(`/movimentos/${cod_movimento}`, data);

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
          <img src={banner} style={{ borderRadius: '8px' }} alt="Banner" />

          <Form 
          ref={formRef} 
          onSubmit={handleSubmit}
          initialData={{
            desc_movimento: movementExpense.desc_movimento,
            dt_movimento: movementExpense.dt_movimento,
            valor: movementExpense.valor
          }}
          >
            <h1>Movimentos de Despesa</h1>
            <Input name="desc_movimento" maxLength={45} icon={AiOutlineProfile} placeholder="Descrição do Movimento" />
            <DatePicker selected={initialDate} onSelect={newDate => setInitialDate(newDate)} name="dt_movimento" icon={AiOutlineProfile} placeholderText="Data do Movimento" />
            <Input name="valor" icon={AiOutlineProfile} placeholder="Valor do Movimento" />

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

export default CreateMovementExpense;
