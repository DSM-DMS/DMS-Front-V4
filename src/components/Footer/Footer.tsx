import React from 'react';
import * as S from './styles';
import { officeInfo } from '../../static/footer';
import bugLogo from '../../assets/logo/bug-logo.png';
import facebookLogo from '../../assets/logo/facebook-logo.png';
import githubLogo from '../../assets/logo/github-logo.png';

interface FooterProps {
  children: React.ReactNode;
}

const Footer: React.StatelessComponent<FooterProps> = ({ children }) => {
  return (
    <S.FooterWrapper>
      <S.FooterTopWrapper>{children}</S.FooterTopWrapper>
      <S.FooterBottomWrapper>
        <S.FooterBottomLeftWrapper>
          <S.FooterTopOfficeInfoWrapper>
            <S.FooterTopOfficeInfo>사감실 전화번호</S.FooterTopOfficeInfo>
            <S.FooterTopOfficeInfo>{officeInfo.phoneNum}</S.FooterTopOfficeInfo>
            <S.FooterTopOfficeInfo>우편번호</S.FooterTopOfficeInfo>
            <S.FooterTopOfficeInfo>{officeInfo.zipCode}</S.FooterTopOfficeInfo>
          </S.FooterTopOfficeInfoWrapper>
          <S.FooterBottomOfficeInfo>
            {officeInfo.address}
          </S.FooterBottomOfficeInfo>
        </S.FooterBottomLeftWrapper>
        <S.FooterBottomRightWrapper>
          <S.FooterBootomIconsWrapper>
            <S.FooterBootomIcon src={bugLogo} />
            <S.FooterBootomIcon src={facebookLogo} />
            <S.FooterBootomIcon src={githubLogo} />
          </S.FooterBootomIconsWrapper>
          <S.FooterCopywriter>© 2019 TEAM DMS</S.FooterCopywriter>
        </S.FooterBottomRightWrapper>
      </S.FooterBottomWrapper>
    </S.FooterWrapper>
  );
};

export default Footer;
