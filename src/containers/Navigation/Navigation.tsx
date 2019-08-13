import React, { useState } from 'react';

import * as S from './styles';

interface NavigationProps {}

const Navigation = () => {
  const [onOpen, setOpen] = useState('');
  return (
    <S.NavigationContainer onOpen={onOpen}>
      <button onClick={() => setOpen('te')}>test</button>
      <S.MypageOrChatting>
        <button onClick={() => setOpen('')}>close</button>
      </S.MypageOrChatting>
    </S.NavigationContainer>
  );
};

export default Navigation;
