import styled from 'styled-components';

export const MypagePointItemWrapper = styled.p`
  display: flex;
  margin: 8px 0;
  height: 3.6875rem;
  padding: 0.625rem 1rem;
  box-sizing: border-box;
  border: 1px solid #bbbbbb;
  border-radius: 0.25rem;
  justify-content: space-between;
  align-items: center;
`;

export const MypagePointItemLeftWrapper = styled.div`
  display: inline-flex;
  height: 2.4375rem;
  flex-direction: column;
  justify-content: space-between;
`;

export const MypagePointItemLeftReason = styled.span`
  font-size: 1.125rem;
  font-weight: 400;
`;
export const MypagePointItemLeftDate = styled.span`
  font-size: 0.75rem;
`;

export const MypagePointItemPoint = styled.span`
  font-size: 1.875rem;
  color: ${props => (props.isGood ? 'black' : '#ee145e')};
`;
