import React from 'react';

import * as S from './styles';

interface NoticeTagItemProps {
  onClickTag: (tagId: string) => void;
  tagContent: string;
  selectedTag: string;
}

const NoticeTagItem: React.StatelessComponent<NoticeTagItemProps> = ({
  onClickTag,
  tagContent,
  selectedTag,
}) => {
  return (
    <S.NoticeTagItem
      onClick={() => onClickTag(tagContent)}
      isSelected={selectedTag === tagContent}
    >
      {tagContent}
    </S.NoticeTagItem>
  );
};

export default NoticeTagItem;
