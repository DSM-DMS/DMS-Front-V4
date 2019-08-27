import React, { useState } from 'react';
import * as S from './styles';

interface NoticePostsTableRowProps {
  date: String;
  title: String;
  views: Number;
  contents: String;
}

const NoticePostsTableRow: React.FC<NoticePostsTableRowProps> = ({
  date,
  title,
  views,
  contents,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <S.NoticePostsTableRowWrapper onClick={() => setIsClicked(!isClicked)}>
        <S.NoticePostsTableRowItem itemSize="9.375">
          {date}
        </S.NoticePostsTableRowItem>
        <S.NoticePostsTableRowItem itemSize="60.875">
          {title}
        </S.NoticePostsTableRowItem>
        <S.NoticePostsTableRowItem itemSize="4.0625" isCenter>
          {views}
        </S.NoticePostsTableRowItem>
      </S.NoticePostsTableRowWrapper>
      {isClicked && (
        <S.NoticePostsTableRowItemContent>
          {contents}
        </S.NoticePostsTableRowItemContent>
      )}
    </>
  );
};

export default NoticePostsTableRow;
