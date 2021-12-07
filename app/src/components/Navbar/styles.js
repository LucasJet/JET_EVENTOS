import styled from 'styled-components';

export const Container = styled.div`
  grid-area: 1 / 2 / 2 / 6;
  width: 100%;
  height: 100%;
  background: white;
  grid-area: navbar;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  padding: 0px 3vw;

  img {
    margin: 0px 15px;
    cursor: pointer;
  }

  hr {
    height: 80%;
    opacity: 50%;
    margin: 0px 10px;
  }

  #logo-avatar {
    margin: 0px 0px 0px 15px;
  }
`;

export const ContainerName = styled.div`
  text-align: right;

  h3 {
    color: #000000;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.01em;
  }

  span {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.01em;
    color: #A6ACBE;
  }
`