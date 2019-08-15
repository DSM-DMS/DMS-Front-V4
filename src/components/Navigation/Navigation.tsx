import React from 'react';
import * as S from './styles';

// import MypageImg from '../../assets/icon/mypage.png'
import ChattingImg from '../../assets/icon/chat.png';
import crossMarkImg from '../../assets/icon/cross-mark.png';
import { MypageContainer, ChattingContainer } from '../../containers';
import { globalColor } from '../../GlobalStyle';

interface NavigationProps {
  isOpen: string;
  setOpen: (value: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, setOpen }) => {
  return (
    <S.NavigationContainer isOpen={isOpen}>
      <S.NavigationButtonWrapper>
        <S.NavigationButton
          onClick={setOpen.bind(null, 'mypage')}
          backColor="#ffffff"
        >

          mypage
        </S.NavigationButton>
        <S.NavigationButton
          onClick={setOpen.bind(null, 'chatting')}
          backColor={globalColor}
        >
          <S.NavigationButtonImg src={ChattingImg} />
        </S.NavigationButton>
      </S.NavigationButtonWrapper>
      <S.MypageOrChatting>
        <S.MypageOrChattingCloseBtn
          src={crossMarkImg}
          onClick={setOpen.bind(null, '')}
        />
      </S.MypageOrChatting>
    </S.NavigationContainer>
  );
};

export default Navigation;
