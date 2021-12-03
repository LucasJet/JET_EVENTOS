import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useToast } from '../../../hooks/ToastContext';
import Loader from "react-loader-spinner";
import api from '../../../services/api';
import Menu from '../../../components/Menu';
import { GrUpdate } from 'react-icons/gr';

import {
  Container,
  Content,
  List,
  Data,
  Divider,
  Item,
  ItemData,
  Update,
  Loading
} from './styles';

interface MovementData {
  desc_despesa: string;
  cod_despesa: number;
}

const Dashboard: React.FC = () => {
  const [dataMovement, setDataMovement] = useState<MovementData[]>([]);
  const { addToast } = useToast();
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  async function getData() {
    await api.get(`/despesas`)
      .then(response => {
        if (response.data.length === 0) {
          alert('Não existem eventos!')
        } else {
          const movements = response.data;
          setDataMovement(movements)
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
          <h1>Listagem de Despesas</h1>
          <br />
          <fieldset>
            {dataMovement.map(item => (
              <Data>
                <Item>
                  Descrição da Despesa:
                  <ItemData>
                    {item.desc_despesa}
                  </ItemData>
                </Item>
                <Divider />
                <Item>
                  Código da Despesa
                  <ItemData>
                    {item.cod_despesa}
                  </ItemData>
                </Item>
                <Update onClick={() => history.push(`/atualizarDespesa/${item.cod_despesa}`)}>Atualizar</Update>
              </Data>
            ))}
          </fieldset>
        </List>
      </Content>
    </Container>
  );
};

export default Dashboard;
