import React from 'react';
import * as S from './styles';
import mypageIcon from '../../assets/icon/Mypage_icon.png';
import mypagePassIcon from '../../assets/icon/pass_icon.png';
import mypageLogoutIcon from '../../assets/icon/logout.png';

interface MypagePeopleInfoProp {
  name: string;
  schoolNumber: string;
}

const MypagePeopleInfo: React.StatelessComponent<MypagePeopleInfoProp> = ({name, schoolNumber}) => {
  return (
  <S.MypagePeopleWrapper>
    <S.MypagePeopleImg src={mypageIcon}/>
    <S.MypagePeopleData>
      <S.MypagePeopleName>{name}</S.MypagePeopleName>
      <S.MypagePeopleSchoolNumber>{schoolNumber}</S.MypagePeopleSchoolNumber>
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