import styled from 'styled-components';

export const NoticeVolunteerTableItemWrapper = styled.p`
  display: flex;
  padding: 2.375rem 1.875rem;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
`;

export const NoticeVolunteerTableItemContent = styled.span`
  width: ${props => props.contentSize}rem;
  font-size: 1.375rem;
`;
