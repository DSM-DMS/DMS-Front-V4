import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  padding: 4.625rem 15.6875rem;
  background-color: #f8f8f8;
  box-sizing: border-box;
  height: 39.25rem;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterBottomWrapper = styled.div`
  display: flex;
  height: 5.125rem;
  justify-content: space-between;
`;

export const FooterBottomLeftWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const FooterTopOfficeInfoWrapper = styled.p`
  font-size: 1.25rem;
`;

export const FooterTopOfficeInfo = styled.span`
  padding: 0 0.75rem;
  border-right: 1px solid #dbdbdb;
  &:nth-of-type(1) {
    padding-left: 0;
  }

  &:nth-last-of-type(1) {
    border: none;
  }
`;

export const FooterBottomOfficeInfo = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
`;

export const FooterBottomRightWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterBootomIconsWrapper = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const FooterBootomIcon = styled.img`
  width: 2.8125rem;
  height: 2.8125rem;
`;

export const FooterCopywriter = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
`;
