import React from 'react';
import { NoticePostsTableHeader } from "..";
import * as S from './styles';

interface NoticePostsTableProps {}

const NoticePostsTable: React.StatelessComponent<
  NoticePostsTableProps
> = ({}) => {
  return (
    <S.NoticePostsTableWrapper>
      <NoticePostsTableHeader />
    </S.NoticePostsTableWrapper>
  );
};

export default NoticePostsTable;
