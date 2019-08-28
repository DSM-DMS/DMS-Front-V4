import React from 'react';

import * as S from './styles';

interface NoticeTagItemProps {
  onClickTag: (
    tagId: String,
    tableType: String,
    staticTableIndex: Number,
  ) => void;
  tagContent: String;
  selectedTag: String;
  tableType: String;
  staticTableIndex: Number;
}

const NoticeTagItem: React.StatelessComponent<NoticeTagItemProps> = ({
  onClickTag,
  tagContent,
  selectedTag,
  tableType,
  staticTableIndex,
}) => {
  return (
    <S.NoticeTagItem
      onClick={() => onClickTag(tagContent, tableType, staticTableIndex)}
      isSelected={selectedTag === tagContent}
    >
      {tagContent}
    </S.NoticeTagItem>
  );
};

export default NoticeTagItem;
