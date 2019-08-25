import styled from 'styled-components';
import { globalColor } from '../../GlobalStyle';

export const MypagePersonalDataWrapper = styled.div`
  height: 11.08125rem;
  background-color: ${globalColor};
  box-sizing: border-box;
  padding: 2.25rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

export const MypagePersonalDataName = styled.span`
  font-size: 2.8125rem;
  color: white;
  font-weight: bold;
`;

export const MypagePersonalDataNumber = styled.p`
  font-size: 1.5625rem;
  font-weight: bold;
  margin-top: 1.8125rem;
  color: white;
`;
