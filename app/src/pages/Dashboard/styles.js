import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 0.5fr repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: 'white';
`;

export const ContainerDashboard = styled.div`
  grid-area: 2 / 2 / 6 / 6;
  padding: 15px 35px;
`;

export const ContainerGraphics = styled.div`
  
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px;
  border: 1px solid #EDEDF6;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  border-radius: 10px;
  padding: 45px;
  min-width: 19%;

  img {
    padding: 15px;
    border-radius: 50%;
    background-color: rgba(113, 59, 219, 0.05);
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  span {
    margin: 0px;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.01em;
    color: #A6ACBE;
  }
`;

export const InfoTotal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h3 {
    font-size: 28px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #000000;
  }

  h4 {
    margin-left: 10px;
    color: #A6ACBE;
  }
`;