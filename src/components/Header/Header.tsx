import React from 'react';

import * as S from './styles';
import alertImg from '../../assets/icon/alert.png';

interface HeaderProps {
  currentRoute: string;
}

const Header: React.StatelessComponent<HeaderProps> = ({ currentRoute }) => {
  const [sectionTitle, menuTitle] = currentRoute.split('/');
  return (
    <S.HeaderWrapper>
      <S.HeaderLeftWrapper>
        <S.HeaderLeftFont className = "main">{sectionTitle}</S.HeaderLeftFont>
>
        <S.HeaderLeftFont>{menuTitle}</S.HeaderLeftFont>
      </S.HeaderLeftWrapper>
      <S.HeaderRightButton>
        <S.HeaderRightButtonImg src={alertImg} />
      </S.HeaderRightButton>
    </S.HeaderWrapper>
  );
};

export default Header;
