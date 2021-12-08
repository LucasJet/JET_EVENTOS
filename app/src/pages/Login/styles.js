import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  overflow: hidden;
  height: 100vh;

  img {
    grid-area: 1 / 3 / 6 / 6;
    height: 100vh;
    width: 100%;
  }
`

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  grid-area: 1 / 1 / 6 / 3;
  background: rgba(60, 100, 177, 0.05);

  img {
    width: 50%;
    height: 20%;
    margin: auto;
  }
`

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
  min-height: 50%;
  background-color: white;
  border: 1px solid #E6E6F0;
  box-sizing: border-box;
  border-radius: 50%;
  padding: 60px 0px 0px 0px;
  border-radius: 25px 25px 0px 0px;

  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: #32264D;
    margin-bottom: 80px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  input {
    background: #FAFAFC;
    border: 1px solid #E6E6F0;
    box-sizing: border-box;
    border-radius: 8px;
    min-height: 60px;
    padding: 0px 15px;
    font-size: 14px;

    font-size: 18px;
    line-height: 24px;
    color: #333136;

    margin: 10px 0px;
    width: 80%;
  }

  button {
    background: #6CB1C7;
    border: 1px solid #E6E6F0;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 20px 0px;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: #FFFFFF;
    margin: 50px 0px 10px 0px;
    width: 80%;
  }
`