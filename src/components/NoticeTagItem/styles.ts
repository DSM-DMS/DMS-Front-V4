import styled from 'styled-components';
import { globalColor } from '../../GlobalStyle';

export const NoticeTagItem = styled.li`
  display: inline-flex;
  width: 11.875rem;
  height: 4.6875rem;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => (props.isSelected ? globalColor : '#bbbbbb')};
  border-radius: 0.9375rem;
  background-color: ${props => (props.isSelected ? globalColor : 'white')};
  cursor: pointer;
  color: ${props => (props.isSelected ? 'white' : '#59545d')}
  font-size: 1.375rem;

  ${props =>
    props.isSelected
      ? null
      : '&:hover {background-color: rgba(0, 190, 145, 0.65)}'}
`;
