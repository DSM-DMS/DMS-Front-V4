import React from 'react';
import * as S from './styles';

interface Props {
  isSentMessage: boolean;
  message: string;
  isMessageRead: boolean;
}

const ChattingMessage: React.FC<Props> = ({
  isSentMessage,
  message,
  isMessageRead,
}) => {
  return (
    <S.ChattingMessageWrapper isSentMessage={isSentMessage}>
      {isSentMessage && (
        <S.MessageInfoWrapper isSentMessage={isSentMessage}>
          <S.MessageSentTime>23:00</S.MessageSentTime>
          {!isMessageRead && <S.MessageIsReadNumber>1</S.MessageIsReadNumber>}
        </S.MessageInfoWrapper>
      )}
      <S.ChattingMessage isSentMessage={isSentMessage}>
        <div>{message}</div>
      </S.ChattingMessage>
      {!isSentMessage && (
        <S.MessageInfoWrapper isSentMessage={isSentMessage}>
          <S.MessageSentTime>23:00</S.MessageSentTime>
          {!isMessageRead && <S.MessageIsReadNumber>1</S.MessageIsReadNumber>}
        </S.MessageInfoWrapper>
      )}
    </S.ChattingMessageWrapper>
  );
};

export default ChattingMessage;
