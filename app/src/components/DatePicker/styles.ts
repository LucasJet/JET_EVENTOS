import styled from 'styled-components';

export const Container = styled.div`
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

  & .react-datepicker {
    color: #fff;
  }

  & .react-datepicker__month-container {
  background-color: #4D4D4D;
  color: #fff;
  font-size: 1rem;
  font-family: 'Mulish';
  }

  & .react-datepicker__month {
    padding: 1rem 0;
    color: #fff;
    padding: 16px;
  }

  & .react-datepicker__month-text {
    display: inline-block;
    width: 5rem;
    margin: 0.5rem;
    font-size: 1rem;
    padding: 16px;
    &:hover {
      background-color: #000;
      color: #000 !important;
    }
  }

  & .react-datepicker__week-number,
    .react-datepicker__day,
    .react-datepicker__time-name {
    color: #fff !important;
    padding: 4px  !important;
    &:hover {
      background-color: #000;
    }
  }
`;
