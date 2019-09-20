import React from 'react';
import * as S from './styles';
import crossMarkImg from '../../assets/icon/cross-mark.png';

interface ChattingProps {
  isChatOpen: string;
  setIsChatOpen: (isChatOpen: boolean) => void;
}

const Chatting: React.FC<ChattingProps> = ({ isChatOpen, setIsChatOpen }) => {
  return (
    <S.ChattingWrapper isChatOpen={isChatOpen}>
      <S.ChattingCloseBtn
        src={crossMarkImg}
        onClick={() => setIsChatOpen(false)}
      />
    </S.ChattingWrapper>
  );
};

export default Chatting;
