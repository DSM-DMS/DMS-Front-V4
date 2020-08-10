import React from 'react';
import * as S from './styles';

interface Props {
  isSentMessage: boolean;
  message: string;
}

const ChattingMessage: React.FC<Props> = ({ isSentMessage, message }) => {
  return (
    <S.ChattingMessage isSentMessage={isSentMessage}>
      <div>{message}</div>
    </S.ChattingMessage>
  );
};

export default ChattingMessage;
