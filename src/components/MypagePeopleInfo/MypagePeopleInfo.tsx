import React from 'react';
import * as S from './styles';
import mypageIcon from '../../assets/icon/Mypage_icon.png';
import mypagePassIcon from '../../assets/icon/pass_icon.png';
import mypageLogoutIcon from '../../assets/icon/logout.png';

interface MypagePeopleInfoProp {
  name: string;
  studentNumber: string;
}

const MypagePeopleInfo: React.StatelessComponent<MypagePeopleInfoProp> = ({name, studentNumber}) => {
  return (
  <S.MypagePeopleWrapper>
    <S.MypagePeopleImg src={mypageIcon}/>
    <S.MypagePeopleData>
      <S.MypagePeopleName>{name}</S.MypagePeopleName>
      <S.MypagePeoplestudentNumber>{studentNumber}</S.MypagePeoplestudentNumber>
    </S.MypagePeopleData>
    <S.MypagePeopleButtonList>
      <S.MypagePeopleButton>
        <S.MypagePeopleButtonImg src={mypagePassIcon}/>
        비밀번호 변경
      </S.MypagePeopleButton>
      <S.MypagePeopleButton>
        <S.MypagePeopleButtonImg src={mypageLogoutIcon}/>
        로그아웃
      </S.MypagePeopleButton>
    </S.MypagePeopleButtonList>
  </S.MypagePeopleWrapper>
  )
}

export default MypagePeopleInfo
