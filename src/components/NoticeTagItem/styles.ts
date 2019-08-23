import styled from 'styled-components';

export const NoticeTagItem = styled.li`
  display: inline-flex;
  width: 11.875rem;
  height: 4.6875rem;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => (props.isClick ? '#8200a1' : '#bbbbbb')};
  border-radius: 0.25rem;
  background-color: ${props => (props.isClick ? '#8200a1' : 'white')};
  cursor: pointer;
  color: ${props => (props.isClick ? 'white' : 'black')}
  font-size: 1.375rem;

  ${props =>
    props.isClick
      ? null
      : '&:hover {background-color: rgba(130, 0, 161, 0.65)}'}
`;
