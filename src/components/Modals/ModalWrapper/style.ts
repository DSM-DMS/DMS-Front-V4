import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.16);
`;

export const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 28.75rem;
  height: 34.44rem;
  border-radius: 1.455rem;
  box-shadow: 0 0.1875rem 0.625rem 0 rgba(0, 0, 0, 0.15);
  background: #fff;
  z-index: 1000;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ModalNameWrapper = styled.div`
  display: flex;
  width: 24.56rem;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ModalName = styled.span`
  font-size: 1.875rem;
  font-weight: bold;
`;

export const ModalClosebtn = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  margin-bottom: 0.8rem;
  cursor: pointer;
`;

export const BugIcon = styled.img`
  width: 1.5rem;
  height: 1.563rem;
  margin-right: 1rem;
`;

export const ModalInput = styled.input`
  height: 3.125rem;
  border-radius: 0.9375rem;
  background-color: #fff;
  border: 0.0625rem solid #bbbbbb;
  line-height: normal;
  padding-left: 1.125rem;
  font-size: 1rem;
`;
