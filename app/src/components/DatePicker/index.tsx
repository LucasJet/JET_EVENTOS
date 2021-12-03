import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import ptBR from "date-fns/locale/pt-BR";
import { useField } from '@unform/core';
import ReactDatePicker, { ReactDatePickerProps, registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


import { Container } from './styles';

interface InputProps extends Omit<ReactDatePickerProps, 'onChange'> {
  name: string;
  containerStyle?: object;
  icon: React.ComponentType<IconBaseProps>;
}

const DatePicker: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  icon: Icon,
  ...rest
}) => {
  const datepickerRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [date, setDate] = useState(defaultValue || null);
  registerLocale("pt-BR", ptBR);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: (ref: any) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
    >
      {Icon && <Icon size={20} />}
      <ReactDatePicker
      ref={datepickerRef}
      selected={date}
      onChange={setDate}
      locale="pt-BR"
      dateFormat="dd/MM/yyyy"
      {...rest}
      />
    </Container>
  );
};

export default DatePicker;
