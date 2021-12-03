import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

export const Container = styled.div`
  background: #494D4B;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 2px solid #494D4B;
  padding: 16px;
  width: 100%;
  color: #fff;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input { 
    flex: 1;
    background: #494D4B;
    border: 0;
    color: #fff;

    &::placeholder {
      color: #fff;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
