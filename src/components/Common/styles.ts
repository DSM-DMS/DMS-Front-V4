import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: inline-block;
  height: 100vh;
  width: 19rem;
  background-color: #f8f8f8;
  box-shadow: 0 5px 10px 0 rgba(126, 139, 129, 0.12);
  padding-top: 3.375rem;
  box-sizing: border-box;
`;

export const TitleWrapper = styled.article`
  width: 8.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImage = styled.img`
  height: 3.375rem;
  width: 3.375rem;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 1000;
  color: #59545d;
`;

export const ListWrapper = styled.article`
  width: 36.0625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.div`
  color: #59545d;
  font-size: 1.25rem;
  font-weight: bold;
`;
