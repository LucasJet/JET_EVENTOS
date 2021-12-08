import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 2fr;
  grid-template-rows: 5.5vw;
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
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100%;
`;

export const CardEvent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  margin: 15px 0px;
  min-width: 555px;
  width: 45%;
  max-height: 35%;
  cursor: pointer;
  border: 1px solid #E6E6F0;
  padding: 10px;
`;

export const ImageEvent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
  }
`;

export const InfoEvent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 2;

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #32264D;
    padding: 15px;
  }

  div {
    display: flex;
    justify-content: start;
    padding: 5px 5px;

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

export const CardContent = styled.div`
  padding: 10px;

  div {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    font-size: 18px;
    color: #6A6180;

    img {
      margin-right: 10px;
    }
  }
`;
  
export const TitlePublication = styled.h3`
  font-size: 36px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;
  color: #606060;
  margin-bottom: 5px;
`

export const DescriptionSpan = styled.span`
  font-size: 18px;
  line-height: 28px;
  color: #6A6180;
  height: 55%;
  padding: 10px;
`

export const ContainerModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  background-color: #fff;
  border: 2px solid #000;
  box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
  padding: 32px;
`