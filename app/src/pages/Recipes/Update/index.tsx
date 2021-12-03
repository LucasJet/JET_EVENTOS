import React, { useRef, useCallback, useState, useEffect} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineProfile, AiOutlineBars, AiOutlineRead } from 'react-icons/ai';
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

interface CreateRecipeFormData {
  name: string;
  ingredients: string;
  preparation: string;
}

interface RouteParams {
  _id: string;
}

const CreateRecipe: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState<CreateRecipeFormData>({
    name: '',
    ingredients: '',
    preparation: ''
  });
  const { _id } = useParams<RouteParams>();

  async function getData() {
    try {
      await api.get(`/recipes/${_id}`)
        .then(response => {
          if(response.data != null){
          const recipe = response.data;
          setRecipe(recipe);
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
    async (data: CreateRecipeFormData) => {
      try {
        
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string()
            .required('Campo Obrigatório').max(50),
          ingredients: Yup.string()
            .required('Campo Obrigatório').max(100),
          preparation: Yup.string()
            .required('Campo Obrigatório').max(250)
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        console.log(data);
        
        await api.put(`/recipes/${_id}`, data);

        addToast({
          type: 'success',
          title: 'Operação realizada com sucesso!',
          description: 'O cadastro no sistema foi atualizado corretamente!',
        });

        history.push('/receitas');

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
            name: recipe && recipe.name,
            ingredients: recipe.ingredients,
            preparation: recipe.preparation,
          }}
          >
            <h1>Receita</h1>
            <Input name="name" maxLength={45} icon={AiOutlineProfile} placeholder="Nome da Receita" />
            <Input name="ingredients" maxLength={45} icon={AiOutlineBars} placeholder="Ingredientes da Receita" />
            <Input name="preparation" maxLength={45} icon={AiOutlineRead} placeholder="Modo de preparo da Receita" />

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

export default CreateRecipe;
