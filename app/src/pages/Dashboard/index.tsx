import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useToast } from '../../hooks/ToastContext';
import Loader from "react-loader-spinner";
import api from '../../services/api';
import Menu from '../../components/Menu';

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
  cod_movimento: number;
  desc_movimento: string;
  dt_movimento: Date;
  valor: string;
  cod_despesa?: number;
  cod_receita?: number;
}

const Dashboard: React.FC = () => {
  const [dataMovement, setDataMovement] = useState<MovementData[]>([]);
  const { addToast } = useToast();
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  async function getData() {
    await api.get(`/movimentos`)
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

  async function removeMovement(value: number) {
    await api.delete(`/movimentos/${value}`)
      .then(response => {
        if(response.data === "Movimento removido com sucesso do sistema!"){
          addToast({
            type: 'success',
            title: 'Operação realizada!',
            description: `Movimento removido com sucesso do sistema!`,
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
        {dataMovement &&
          <List>
            <h1>Listagem de Movimentos</h1>
            <br />
            <fieldset>
              {dataMovement.map(item => (
                <Data>
                  <Item>
                    Descrição do Movimento:
                  <ItemData>
                      {item.desc_movimento}
                    </ItemData>
                  </Item>
                  <Divider />
                  <Item>
                    Data do Movimento:
                  <ItemData>
                      {item.dt_movimento}
                    </ItemData>
                  </Item>
                  <Item>
                    Valor do Movimento:
                  <ItemData>
                      R$ {item.valor}
                    </ItemData>
                  </Item>
                  {item.cod_despesa &&
                    <Item>
                      Código de Despesa:
                  <ItemData>
                        {item.cod_despesa}
                      </ItemData>
                    </Item>
                  }
                  {item.cod_receita &&
                    <Item>
                      Código de Receita:
                  <ItemData>
                        {item.cod_receita}
                      </ItemData>
                    </Item>
                  }
                  <Item>
                    Código do Movimento
                  <ItemData>
                      {item.cod_movimento}
                    </ItemData>
                  </Item>
                  <Update onClick={() => history.push(`/atualizarMovDesp/${item.cod_movimento}`)}>Atualizar</Update>     
                  <Delete onClick={() => removeMovement(item.cod_movimento)}>Deletar</Delete>     
                </Data>
              ))}
            </fieldset>

          </List>
        }
      </Content>
    </Container>
  );
};

export default Dashboard;
