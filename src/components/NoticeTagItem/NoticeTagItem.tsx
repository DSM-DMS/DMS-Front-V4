import React from 'react';

import * as S from './styles';

interface NoticeTagItemProps {
  onClickTag: (tagId: string) => void;
  tagId: string;
  selectedTag: string;
}

const NoticeTagItem: React.StatelessComponent<NoticeTagItemProps> = ({
  onClickTag,
  tagId,
  selectedTag,
}) => {
  return (
    <S.NoticeTagItem
      onClick={() => onClickTag(tagId)}
      isSelected={selectedTag === tagId}
    >
      {tagId}
    </S.NoticeTagItem>
  );
};

export default NoticeTagItem;
