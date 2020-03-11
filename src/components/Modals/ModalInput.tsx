import React from 'react';
import * as S from './style';

interface Props {
  placeholder: string;
}

const ModalInput: React.StatelessComponent<Props> = ({ placeholder }) => {
  return <S.ModalInput placeholder={placeholder} />;
};

export default ModalInput;
