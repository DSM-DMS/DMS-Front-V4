import React from 'react';
import * as S from './styles.ts'
import Logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom'; 

interface HeaderProps {}

const Header : React.FC<HeaderProps> = () => {
    return (
        <>
            <S.HeaderWrapper>
                <S.TitleWrapper>
                    <S.LogoImage alt="DMS LOGO" title="DMS LOGO" src={Logo}/>
                    <S.Title>DMS</S.Title>
                </S.TitleWrapper>
                <S.ListWrapper>
                    <S.List>급식화면</S.List>
                    <S.List>신청화면</S.List>
                    <S.List>공지사항</S.List>
                    <S.List>로그인</S.List>
                </S.ListWrapper>
            </S.HeaderWrapper>
        </>
    )
} 

export default Header;