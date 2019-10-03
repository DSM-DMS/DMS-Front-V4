import React from 'react';

import * as S from './styles';

interface NoticePostsTableHeaderProps {}

const NoticePostsTableHeader: React.StatelessComponent<
  NoticePostsTableHeaderProps
> = ({}) => {
  return (
    <S.NoticePostsTableHeaderWrapper>
      <S.NoticePostsTableHeaderItem itemSize="9.375">

        날짜
      </S.NoticePostsTableHeaderItem>
      <S.NoticePostsTableHeaderItem itemSize="60.875">

        게시글
      </S.NoticePostsTableHeaderItem>
      <S.NoticePostsTableHeaderItem itemSize="4.8">

        조회수
      </S.NoticePostsTableHeaderItem>
    </S.NoticePostsTableHeaderWrapper>
  );
};

export default NoticePostsTableHeader;
