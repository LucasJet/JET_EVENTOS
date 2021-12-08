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

export const ContainerCreatePublication = styled.div`
  grid-area: 2 / 2 / 6 / 6;
  padding: 15px 35px;
  grid-area: containerGrid;
`;

export const CardCreatePublication = styled.div`
  background: #FFFFFF;
  border: 1px solid #E6E6F0;
  border-radius: 8px;
  width: 50%;
  height: 100%;
`

export const HeaderCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 25px 20px;

  img {
    margin-right: 15px;
    cursor: pointer;
  }
`

export const FormContainerPublication = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 10px 25px;
  height: 80%;

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    color: #32264D;
  }

  hr {
    margin: 10px 0px 25px 0px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`

export const LabelFormInput = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 24px;
  color: #9C98A6;
  padding: 8px;

  input {
    background: #FAFAFC;
    border: 1px solid #E6E6F0;
    border-radius: 8px;
    min-height: 60px;
    padding: 0px 15px;
    color: #32264D;
    font-size: 14px;
  }

  textarea {
    background: #FAFAFC;
    color: #32264D;
    font-size: 14px;
    border: 1px solid #E6E6F0;
    border-radius: 8px;
    min-height: 150px;
    padding: 15px;
  }
`

export const FooterSave = styled.div`
  display: flex;
  justify-content: space-around;
  background: #FAFAFC;
  border: 1px solid #E6E6F0;
  padding: 30px;

  div {
    display: flex;
    align-items: flex-start;
    width: 50%;
    flex-wrap: wrap;
    align-self: center;

    div {
      display: flex;
      flex-direction: column;
      width: 70%;
    }

    img {
      width: 40px;
      margin-right: 5px;
    }
    
    span {
      font-size: 12px;
      line-height: 20px;
      color: #A0A0B3;
    }
  }

  button {
    background: #6DAEFB;
    border: 1px solid #E6E6F0;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 15px 35px;
    color: white;
  }
`