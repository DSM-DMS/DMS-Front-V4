import styled from 'styled-components';

export const MypageStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MypageStatusToPoint = styled.button`
  height: 5.375rem;
  width: 100%;
  font-weight: bold;
  background-color: white;
  border: none;
  border-bottom: 1.6px solid rgba(0, 0, 0, 0.11);
  font-size: 1.375rem;
  margin-bottom: calc(0.1375rem + 1.6px);
`;

export const MypageStatusItem = styled.button`
  width: 24.5375rem;
  height: 4.125rem;
  background-color: #f1f1f1;
  border: none;
  border-radius: 2.1875rem;
  font-weight: bold;
  font-size: 1.375rem;
  margin-top: 2.025rem;

  &:hover {
    width: 25rem;
  }
`;

export const MypageStatusBottom = styled.p`
  text-aling: center;
  margin-top: 2.5625rem;
`;

export const MypageStatusBottomButton = styled.span`
  font-size: 0.9375rem;
  cursor: pointer;
`;
