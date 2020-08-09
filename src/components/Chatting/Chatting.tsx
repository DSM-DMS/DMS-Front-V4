import React from 'react';
import * as S from './styles';
import sendMessageImg from '../../assets/icon/send-message.png';
import crossMarkImg from '../../assets/icon/cross-mark.png';

interface ChattingProps {
  isChatOpened: string;
  setCloseChatting: (isChatOpened: boolean) => void;
}

const Chatting: React.FC<ChattingProps> = ({
  isChatOpened,
  setCloseChatting,
}) => {
  return (
    <S.ChattingWrapper isChatOpened={isChatOpened}>
      <S.ChattingCloseBtn
        src={crossMarkImg}
        onClick={() => setCloseChatting(false)}
      />
      <S.ChattingHeader>사감실</S.ChattingHeader>
      <S.ChattingMessageWrapper></S.ChattingMessageWrapper>
      <S.ChattingInputWrapper>
        <S.ChattingMessageInput placeholder="메시지를 입력해주세요" />
        <S.SendMessageButton src={sendMessageImg} />
      </S.ChattingInputWrapper>
    </S.ChattingWrapper>
  );
};

export default Chatting;
