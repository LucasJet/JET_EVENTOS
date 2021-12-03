import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #4D4D4D;
  border-radius: 10px;
  border: 2px solid #4D4D4D;
  padding: 16px;
  width: 100%;
  color: #fff;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c4150a;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ebecf0;
      border-color: #fff;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ebecf0;
    `}

  input {
    flex: 1;
    background: #4D4D4D;
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

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c4150a;
    color: #fff;

    &::before {
      border-color: #c4150a transparent;
    }
  }
`;
