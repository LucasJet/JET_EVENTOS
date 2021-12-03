import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  max-height: 100%;
  background-color: #112e4a;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  max-height: 100%;
`;

const appearFromLeft = keyframes`
  from {
    opacity:0;
    transform: translateX(-50px);
  }
  to {
    opacity:1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  img {
    height: 100%;
    width: 100%;
    margin-top: 8px;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-weight: 500;
    }

    a {
      color: #ffffff;
      margin-top: 18px;
      text-decoration: none;
      transition: color 0.2s;
      display: flex;
      align-items: center;
      text-align:center;
      justify-content: center;

      svg {
        margin-right: 16px;
      }

      &:hover {
        color: ${shade(0.2, '#141414')};
      }
    }
  }
`;
