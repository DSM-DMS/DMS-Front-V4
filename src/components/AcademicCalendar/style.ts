import styled from 'styled-components';
import { globalColor } from '../../GlobalStyle';

export const AcademicCalendarWrapper = styled.div`
  display: flex;
  width: 61.88rem;
  height: 10.88rem;
  border: solid 0.1875rem #e3e3e3;
  border-radius: 3.125rem 3.125rem 0 3.125rem;
  background-color: #fefefe;
  align-items: center;
  margin-left: 7.813rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background: ${globalColor};
  }
`;

export const AcademicCalendarTabel = styled.table`
  width: 53.75rem;
  height: 6rem;
  margin-left: 4.063rem;
  font-size: 1.25rem;
  color: #59545d;
`;
