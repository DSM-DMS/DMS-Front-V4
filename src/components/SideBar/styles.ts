import styled from 'styled-components';

export const SideBarWrapper = styled.aside`
  display: flex;
  height: 100vh;
  width: 19rem;
  background-color: #f8f8f8;
  box-shadow: 0 5px 10px 0 rgba(126, 139, 129, 0.12);
  padding-top: 3.375rem;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  z-index: 3;
`;

export const SideBarButton = styled.button`
  display: flex;
  width: 14.25rem;
  height: 3.3125rem;
  border: none;
  border-radius: 0.9375rem;
  margin-bottom: 0.5rem;
  align-items: center;
  color: #59545d;
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: normal;
  font-family: 'Noto Sans Kr';
  background-color: #f8f8f8;

  &:hover {
    background-color: white;
  }
`;

export const SideBarButtonImg = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  margin-right: 1.6875rem;
  margin-left: 1.7375rem;
`;
