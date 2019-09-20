import React from 'react';
import * as S from './styles';
import crossMarkImg from '../../assets/icon/cross-mark.png';

interface ChattingProps {
  setIsChatOpen: (isChatOpen: boolean) => void;
}

const Chatting: React.FC<ChattingProps> = ({ setIsChatOpen }) => {
  return (
    <S.ChattingWrapper>
      <S.ChattingCloseBtn src={crossMarkImg} onClick={setIsChatOpen} />
    </S.ChattingWrapper>
  );
};

export default Chatting;
