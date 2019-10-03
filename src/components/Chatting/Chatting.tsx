import React from 'react';
import * as S from './styles';
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
    </S.ChattingWrapper>
  );
};

export default Chatting;
