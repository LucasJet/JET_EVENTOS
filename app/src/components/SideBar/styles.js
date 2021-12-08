import styled from 'styled-components';

export const Container = styled.div`
  grid-area: 1 / 1 / 6 / 2;
  background: #494B57;
  width: 100%;
  height: 100%;
  grid-area: sidebar;

  display: flex;
  flex-direction: column;
  align-items: center;

  div > img {
    margin: 15px 0px 0px 0px;
    min-width: 37px;
    width: 25%;
  }

  div > span {
    font-family: Basic;
    font-size: 1em;
    line-height: 18px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    margin: 10px 0px 15px 0px;
  }

  #logo-jet {
    width: 10vw;
  }
`;

export const ContainerTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 100%;
`