import React from 'react';

import * as S from './styles';

interface NoticeTagItemProps {
  onClickTag: (
    tagId: string,
    tableType: string,
    staticTableIndex: number,
  ) => void;
  tagContent: string;
  selectedTag: string;
  tableType: string;
  staticTableIndex: number;
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
