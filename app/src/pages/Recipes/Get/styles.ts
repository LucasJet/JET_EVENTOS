import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Content = styled.main`
    background: #112e4a;
    width: 100%;
    height: 100vh;
    margin: 64px 0px auto;
    
    fieldset {
      margin: 24px;
      border: 0;
    }
`;

export const Data = styled.div`
margin: 12px auto;
padding: 24px;
background: #FFF;
border-radius: 8px;
display: flex;
flex-direction: column;
border: 2px solid black;
`;

export const Item = styled.div`
display: flex;
font-weight: bolder;
color: #000;
`;

export const Divider = styled.div`
border: 1px solid black;
margin: 2px 0px 8px 0px;
`;

export const ItemData = styled.div`
display: flex;
font-weight: bolder;
padding-left: 8px;
color: #112e4a;
`;


export const Update = styled.button`
  color: #fff;
  display: block;
  margin-top: 12px;
  text-decoration: none;
  transition: color 0.2s;
  border: 2px solid black;
  background-color: #112e4a;
  padding: 8px;
  width: 100px;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 8px;

  svg {
    margin-right: 16px;
  }

  &:hover {
    color: ${shade(0.2, '#000000')};
  }
`;

export const Delete = styled.button`
  color: #fff;
  display: block;
  margin-top: 12px;
  text-decoration: none;
  transition: color 0.2s;
  border: 2px solid black;
  background-color: #112e4a;
  padding: 8px;
  width: 100px;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 8px;

  svg {
    margin-right: 16px;
  }

  &:hover {
    color: ${shade(0.2, '#000000')};
  }
`;


export const List = styled.main`
margin: -64px 36px 0px 36px;
padding: 36px;
max-width: 95%;
background-color: #112e4a;
display: flex;
flex-direction: column;
`;

export const Loading = styled.div`
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    position: fixed;
    display: flex;
    opacity: 0.7;
    z-index: 99;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;


