import React from 'react';

import * as S from './styles';
import alertImg from '../../assets/icon/alert.png';
import HeaderLoginButton from '../HeaderLoginButton/HeaderLoginButton';
import { ModalTypes } from '../../modules/modal';
interface HeaderProps {
  currentRoute: string;
  changeModalType: (modalType: ModalTypes) => void;
}

const Header: React.StatelessComponent<HeaderProps> = ({
  currentRoute,
  changeModalType,
}) => {
  const [sectionTitle, menuTitle] = currentRoute.split('/');
  return (
    <S.HeaderWrapper>
      <S.HeaderLeftWrapper>
        <S.HeaderLeftFont className="main">{sectionTitle}</S.HeaderLeftFont>>
        <S.HeaderLeftFont>{menuTitle}</S.HeaderLeftFont>
      </S.HeaderLeftWrapper>
      <S.HeaderRightButton>
        <HeaderLoginButton changeModalType={changeModalType} />
        <S.HeaderRightButtonImg src={alertImg} />
      </S.HeaderRightButton>
    </S.HeaderWrapper>
  );
};

export default Header;
