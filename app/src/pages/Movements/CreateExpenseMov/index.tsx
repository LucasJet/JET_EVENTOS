import React, { useRef, useCallback, useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineProfile } from 'react-icons/ai';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import Loader from "react-loader-spinner";

import { useAuth } from '../../../hooks/AuthContext';
import { useToast } from '../../../hooks/ToastContext';

import getValidationErrors from '../../../utils/getValidationErros';
import api from '../../../services/api';

import banner from '../../../assets/banner.jpg';

import Input from '../../../components/Input';
import DatePicker from '../../../components/DatePicker';
import Select from '../../../components/Select';
import Button from '../../../components/Button';

import { Container, Content, AnimationContainer, Loading } from './styles';

interface CreateMovementExpenseFormData {
  desc_movimento: string;
  dt_movimento: Date;
  valor: number;
  cod_despesa?: number;
  cod_receita?: number;
}

interface SelectDataI {
  cod_despesa: string;
  desc_despesa: string;
}

interface OptionsCompany {
  value: string;
  label: string;
}

const CreateMovementExpense: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [selectDataCategory, setSelectDataCategory] = useState<OptionsCompany[]>([]);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  async function getData() {
    await api.get(`/despesas`)
      .then(response => {
        const selectData = response.data;
        selectData.forEach((element: SelectDataI) => {
          selectDataCategory.push({
            label: element.desc_despesa,
            value: element.cod_despesa
          })
        });

        const selectData_sort = selectDataCategory.sort(function (a, b) {
          return ((a.label) > (b.label)) ? 1 : (((b.label) > (a.label)) ? -1 : 0);
        });

        setSelectDataCategory(selectData_sort);
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
    async (data: CreateMovementExpenseFormData) => {
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

        if(data.dt_movimento > new Date()){
          addToast({
            type: 'success',
            title: 'Operação realizada com sucesso!',
            description: 'O cadastro no sistema foi realizado corretamente!',
          });
        }

        await api.post('/movimentos', data);

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

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Movimentos de Despesa</h1>
            <Input name="desc_movimento" maxLength={45} icon={AiOutlineProfile} placeholder="Descrição do Movimento" />
            <DatePicker name="dt_movimento" icon={AiOutlineProfile} placeholderText="Data do Movimento" />
            <Input name="valor" icon={AiOutlineProfile} placeholder="Valor do Movimento" />
            <Select
              name="cod_despesa"
              label="Selecione uma categoria"
              text="Selecione uma categoria"
              defaultValue={selectDataCategory[1]}
              options={selectDataCategory}
              placeholder="Selecione uma categoria"
            />

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

export default CreateMovementExpense;
