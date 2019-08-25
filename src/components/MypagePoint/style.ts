import styled from 'styled-components';

export const MypagePointToStatus = styled.button`
  position: relative;
  height: 5.375rem;
  width: 100%;
  font-weight: bold;
  background-color: white;
  border: none;
  border-bottom: 1.6px solid rgba(0, 0, 0, 0.11);
  font-size: 1.375rem;
  margin-bottom: calc(0.1375rem + 1.6px);
`;

export const MypagePointExit = styled.img`
  height: 1.45rem;
  width: 0.89375rem;
  position: absolute;
  left: 2.3125rem;
  top: 50%;
  transform: translate(0, -50%);
`;

export const MypagePointsList = styled.div`
  display: flex;
  max-height: 25.58125rem;
  width: 100%;
  padding: 0.35rem 1.875rem;
  box-sizing: border-box;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.375rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.1875rem;
    background-color: #8200a1;
  }
`;
