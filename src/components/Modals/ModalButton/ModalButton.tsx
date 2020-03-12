import React from 'react';
import * as S from './style';

interface Props {
  buttonName: string;
}

const ModalButton: React.StatelessComponent<Props> = ({ buttonName }) => {
  return <S.ModalSubmitBtn>{buttonName}</S.ModalSubmitBtn>;
};

export default ModalButton;
