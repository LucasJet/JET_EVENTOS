import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 2fr;
  grid-template-rows: 5.3vw;
  grid-template-areas:
      "sidebar navbar"
      "sidebar containerGrid"
      "sidebar containerGrid";
  min-height: 100vh;
  background: #F8F8FB;
`;

export const ContainerEvents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 35px;
  grid-area: containerGrid;
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 0px;

  button {
    background: #6DAEFB;
    border: 1px solid #E6E6F0;
    box-sizing: border-box;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF;
    padding: 10px 20px;
  }
`

export const ListEvents = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CardEvent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  margin: 15px 0px;
  max-width: 45%;
  max-height: 35%;
`;

export const ImageEvent = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const InfoEvent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #32264D;
    padding: 10px;
  }

  div {
    display: flex;
    justify-content: start;
    padding: 5px 10px;

    img {
      margin-right: 5px;
    }

    span {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      color: #6A6180;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  > :last-child {
    margin-right: 0px;
  }

  button {
    background: #FFFFFF;
    border: 1px solid #B4B4B4;
    padding: 6px 13px;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #A3A3A3;
    margin: 5px;
  }
`;
