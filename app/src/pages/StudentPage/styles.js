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

export const ContainerStudent = styled.div`
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
`

export const ListEvents = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const CardEvent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 15px 0px;
  width: 30%;
  min-width: 310px;
  max-width: 45%;
  min-height: 250px;
  max-height: 35%;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;

  background: #FFFFFF;
  border: 1px solid #E6E6F0;

  transition: all 0.7s ease;

  &:hover {
    background: rgb(239 239 239 / 29%);
  }

  span {
    font-size: 18px;
    color: #6A6180;
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

export const ListPublications = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const CardPublication = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px;
  min-width: 310px;
  width: 30%;
  max-height: 35%;
  padding: 15px 25px;
  cursor: pointer;
  
  background: #FFFFFF;
  border: 1px solid #E6E6F0;
  box-sizing: border-box;
  border-radius: 8px;

  transition: all 0.7s ease;

  &:hover {
    background: rgb(239 239 239 / 29%);
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

export const CreatedBySpan = styled.span`
  font-size: 14px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;
  color: #606060;
  margin-top: 25px;
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

export const ContainerButtonsEvent = styled.div`
  display: flex;
  flex-direction: row;

  button {
    border: 1px solid #B4B4B4;
    padding: 6px 13px;
    font-weight: 600;
    font-size: 14px;
    line-height: 26px;
    color: white;
    margin: 5px;

    background: #6DAEFB;
    border: 1px solid #E6E6F0;
    border-radius: 8px;
  }
`