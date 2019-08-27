import React from 'react';
import { NoticePostsTableHeader } from '..';
import * as S from './styles';

interface NoticePostsTableProps {
  postsRows: React.ReactNode;
}

const NoticePostsTable: React.StatelessComponent<NoticePostsTableProps> = ({
  postsRows,
}) => {
  return (
    <S.NoticePostsTableWrapper>
      <NoticePostsTableHeader />
      {postsRows}
    </S.NoticePostsTableWrapper>
  );
};

export default NoticePostsTable;
