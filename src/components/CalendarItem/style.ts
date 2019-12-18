import styled from 'styled-components';
import { globalColor } from '../../GlobalStyle';

export const CalendarItem = styled.div`
  display: flex;
  width: 5.875rem;
  height: 9.688rem;
  background-color: $fff
  border-radius: 0px 6.25rem 6.25rem / 6.5rem;
  flex-direction: column;
  align-items: center;
  &:active {
    background-color: ${globalColor};
    color: #fff;
  }
`;

export const CalendarInfoWrapper = styled.div`
  display: flex;
  height: 6.438rem;
  margin-top:1.563rem;
  flex-direction: column
  justify-content: space-between;
`;

export const CalendarInfo = styled.p`
  color: #59545d;
  font-size: 1.375rem;
`;
