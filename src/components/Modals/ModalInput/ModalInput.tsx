import React, { useEffect } from 'react';
import * as S from './style';

interface Props {
  placeholder: string;
  inputName: string;
  inputType?: string;
  value: string | number;
  changeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalInput: React.FC<Props> = ({
  placeholder,
  inputType,
  inputName,
  value,
  changeEvent,
}) => {
  return (
    <S.ModalInput
      placeholder={placeholder}
      type={inputType}
      name={inputName}
      value={value}
      onChange={changeEvent}
      onFocus={() => console.log(value)}
    />
  );
};

export default ModalInput;
