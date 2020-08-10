import React from 'react';
import * as S from './styles';

interface Props {
  isSentMessage: boolean;
  message: string;
}

const ChattingMessage: React.FC<Props> = ({ isSentMessage, message }) => {
  return (
    <S.ChattingMessageWrapper isSentMessage={isSentMessage}>
      {isSentMessage && (
        <S.ChattingSentTime isSentMessage={isSentMessage}>
          23:00
        </S.ChattingSentTime>
      )}
      <S.ChattingMessage isSentMessage={isSentMessage}>
        <div>{message}</div>
      </S.ChattingMessage>
      {!isSentMessage && (
        <S.ChattingSentTime isSentMessage={isSentMessage}>
          23:00
        </S.ChattingSentTime>
      )}
    </S.ChattingMessageWrapper>
  );
};

export default ChattingMessage;
