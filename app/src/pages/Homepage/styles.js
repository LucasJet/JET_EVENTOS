import styled from 'styled-components';

export const ContainerSections = styled.div`
`

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  padding: 10%;

  iframe {
    width: 55%;
  }
`

export const ContainerInfo = styled.section`
  display: flex;
  flex-direction: column;
  padding: 35px;
  justify-content: center;

  h3 {
    font-weight: 800;
    font-size: 1.2em;
    line-height: 18px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: #3C64B1;
  }

  h1 {
    font-weight: bold;
    font-size: 4em;
    line-height: 56px;
    letter-spacing: 0.2px;
    color: #373F41;
    margin: 25px 0px 70px 0px;
  }

  span {
    font-size: 1.2em;
    line-height: 22px;
    letter-spacing: 0.3px;
    color: #737B7D;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span {
      width: 250px;
    }
  }
`

export const ContainerInfoContato = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    
    div {
      align-items: center;
    }
  }

  img {
    width: 34px;
    margin-right: 15px;
  }
`
