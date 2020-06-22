import styled from 'styled-components';

export const NoticePostsTableHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.125rem 1.875rem;
  box-sizing: border-box;
  background-color: #e1e1e1;
`;

export const NoticePostsTableHeaderItem = styled.span<{ itemSize: string }>`
  width: ${(props) => props.itemSize}rem;
  color: #59545d;
  font-size: 1.375rem;
`;
