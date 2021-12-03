import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useToast } from '../../../hooks/ToastContext';
import Loader from "react-loader-spinner";
import api from '../../../services/api';
import Menu from '../../../components/Menu';

import {
  Container,
  Content,
  List,
  Data,
  Divider,
  Item,
  ItemData,
  Update,
  Delete,
  Loading
} from './styles';

interface MovementData {
  name: string;
  ingredients: string;
  preparation: string;
  _id: string;
}

const Dashboard: React.FC = () => {
  const [dataMovement, setDataMovement] = useState<MovementData[]>([]);
  const { addToast } = useToast();
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  async function getData() {
    await api.get(`/recipes`)
      .then(response => {
        const movements = response.data;
        setDataMovement(movements)
        if (response.data.length === 0) {
          alert('Não existem receitas!')
        }
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

  async function removeRecipe(value: string) {
    await api.delete(`/recipes/${value}`)
      .then(response => {
        if(response.data == ''){
          addToast({
            type: 'success',
            title: 'Operação realizada!',
            description: `Receita removida com sucesso do sistema!`,
          });
          getData(); 
        } else {
          addToast({
            type: 'error',
            title: 'Erro na Atualização',
            description: `Erro na requisição realizada`,
          });
        }
      });
  }

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
      <Menu />
      <Content> 
      <List>
          <h1>Listagem de Receitas</h1>
          <br />
          <fieldset>
            {dataMovement.map(item => (
              <Data>
                <Item>
                  Nome
                  <ItemData>
                  {item.name}
                  </ItemData> 
                </Item>
                <Divider/>
                <Item>
                  Ingredientes
                  <ItemData>
                  {item.ingredients}
                  </ItemData> 
                </Item>
                <Item>
                  Modo de Preparo
                  <ItemData>
                    {item.preparation}
                  </ItemData>
                </Item>
                <Update onClick={() => history.push(`/atualizarReceita/${item._id}`)}>Atualizar</Update>
                <Delete onClick={() => removeRecipe(item._id)}>Deletar</Delete> 
              </Data>
            ))}
          </fieldset>
        </List>
      </Content>
    </Container>
  );
};

export default Dashboard;
