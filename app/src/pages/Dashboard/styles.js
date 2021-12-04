import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr repeat(4, 1fr);
  grid-template-rows: 0.5fr repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  min-height: 100vh;
  background: #F8F8FB;
`;

export const ContainerDashboard = styled.div`
  grid-area: 2 / 2 / 6 / 6;
  padding: 15px 35px;

  h1 {
    font-size: 2em;
  }
`;

export const ContainerGraphics = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 85%;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  grid-area: 1 / 1 / 6 / 4;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px;
  border: 1px solid #EDEDF6;
  box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 15%);
  border-radius: 10px;
  padding: 30px;
  width: 40%;
  min-width: 235px;
  background: white;

  img {
    padding: 15px;
    border-radius: 50%;
    background-color: rgba(113, 59, 219, 0.05);
    min-width: 55px;
    width: 20%;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  span {
    margin: 0px;
    font-size: 1.1em;
    line-height: 18px;
    letter-spacing: 0.01em;
    color: #A6ACBE;
  }
`;

export const InfoTotal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;

  h3 {
    font-size: 1.8em;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #000000;
  }

  h4 {
    margin-left: 10px;
    color: #A6ACBE;
    font-size: 1.2em;
  }
`;

export const ContainerLastEvents = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #EDEDF6;
  box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 15%);
  border-radius: 10px;
  flex: 1;
  margin: 15px;
  grid-area: 1 / 4 / 6 / 6;
  background: white;
  
  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 1.1em;
    line-height: 24px;
    letter-spacing: 0.01em;
  }

  hr {
    margin-bottom: 15px;
    width: 100%;
    border: 1px solid #EDEDF6;
  }
`;

export const HeaderLastEvents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;

  select {
    border: none;
    background-color: white;
    cursor: pointer;
    font-size: 0.9em;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #A6ACBE;
  }
`

export const ListLastEvents = styled.div`
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 15px;
    font-size: 1.1em;
    line-height: 18px;
    letter-spacing: 0.01em;
    color: #A6ACBE;
  }

  b {
    color: black;
  }
`