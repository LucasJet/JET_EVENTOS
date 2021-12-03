import styled from 'styled-components';

export const Container = styled.div`
  grid-area: 1 / 1 / 6 / 2;
  background: #494B57;
  width: 8vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  div > img {
    margin: 15px 0px 0px 0px;
  }

  div > span {
    font-family: Basic;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    margin: 10px 0px 15px 0px;
  }

  #logo-jet {
    width: 8vw;
  }
`;

export const ContainerTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  width: 100%;
`