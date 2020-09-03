import React from 'react';
import * as S from './style';

interface Props {
  buttonName: string;
  clickEvent: (params: any) => {};
}

const ModalButton: React.StatelessComponent<Props> = ({
  buttonName,
  clickEvent,
}) => {
  return <S.ModalSubmitBtn onClick={clickEvent}>{buttonName}</S.ModalSubmitBtn>;
};

export default ModalButton;
