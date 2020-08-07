import styled from 'styled-components';

export const NoticePostsTableRowWrapper = styled.div`
  display: flex;
  padding: 2.125rem 1.875rem;
  justify-content: space-between;
  border-bottom: 1px solid #e4e4e4;
  cursor: pointer;
`;

export const NoticePostsTableRowItem = styled.span<{
  itemSize: string;
  isCenter?: boolean;
}>`
  width: ${(props) => props.itemSize}rem;
  font-size: 1.375rem;
  text-align: ${(props) => (props.isCenter ? 'center' : null)};
`;
export const NoticePostsTableRowItemContent = styled.p`
  padding: 2.34375rem 1.875rem;
  line-height: 2.8125rem;
  font-size: 1.375rem;
  border-bottom: 1px solid #e4e4e4;
  white-space: pre-wrap;
`;
