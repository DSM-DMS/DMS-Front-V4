import React from 'react';

import * as S from './styles';

interface NoticeTagItemProps {
  onClickTag: (tagId: String, tableType: String) => void;
  tagContent: String;
  selectedTag: String;
  tableType: String;
}

const NoticeTagItem: React.StatelessComponent<NoticeTagItemProps> = ({
  onClickTag,
  tagContent,
  selectedTag,
  tableType,
}) => {
  return (
    <S.NoticeTagItem
      onClick={() => onClickTag(tagContent, tableType)}
      isSelected={selectedTag === tagContent}
    >
      {tagContent}
    </S.NoticeTagItem>
  );
};

export default NoticeTagItem;
