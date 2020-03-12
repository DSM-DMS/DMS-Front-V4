import React from 'react';
import * as S from './style';

interface Props {
  placeholder: string;
  inputType?: string;
}

const ModalInput: React.StatelessComponent<Props> = ({
  placeholder,
  inputType,
}) => {
  return <S.ModalInput placeholder={placeholder} type={inputType} />;
};

export default ModalInput;
