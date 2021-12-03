import React, { useRef, useEffect } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
  StylesConfig
} from 'react-select';
import { useField } from '@unform/core';
 
interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}
 
const customStyles: StylesConfig = {
  control: (provided) => ({ 
    background: '#4D4D4D',
    borderRadius: '10px',
    border: '2px solid #4D4D4D',
    width: '100%',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    marginTop: '8px',
    ':hover': {
      border: '2px solid #4D4D4D',
    }
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isFocused ? '#4D4D4D' : '#4D4D4D',
    flex: '1',
    border: '0',
    color: '#fff',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    ':hover': {
      background: 'black'
    }

  }),
  singleValue: (provided) => ({
    ...provided,
    background: '#4D4D4D',
    flex: '1',
    border: '0',
    color: '#fff',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#fff',
  }),
  input: (provided) => ({
    ...provided,
    color: '#fff',
  }),
  menu: (provided) => ({
    ...provided,
    margin: '0',
    borderColor: '1px solid #4D4D4D',
    color: '#fff',
  }),
  menuList: (provided) => ({
    ...provided,
    margin: '0',
    borderRadius: '5px',
    backgroundColor: '#4D4D4D',
    color: '#fff',
  }),
}


const Select: React.FC<Props> = ({ name, defaultInputValue, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  useEffect(() => {
    registerField({  
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <ReactSelect 
      styles={customStyles}
      defaultValue={defaultValue}
      maxMenuHeight={120}
      defaultInputValue={defaultInputValue}
      ref={selectRef}
      classNamePrefix="react-select"
      {...rest}
    />
  );
};
export default Select;
