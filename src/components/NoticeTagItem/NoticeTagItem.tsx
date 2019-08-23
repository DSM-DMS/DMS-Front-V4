import React from 'react';

import * as S from './styles';

interface NoticeTagItemProps {
  onClickTag: (tagTitle: string) => void;
  tagTitle: string;
  nowClickedTag: string;
}

const NoticeTagItem: React.FC<NoticeTagItemProps> = ({
  onClickTag,
  tagTitle,
  nowClickedTag,
}) => {
  return (
    <S.NoticeTagItem
      onClick={() => onClickTag(tagTitle)}
      isClick={nowClickedTag === tagTitle}
    >
      {tagTitle}
    </S.NoticeTagItem>
  );
};

export default NoticeTagItem;
