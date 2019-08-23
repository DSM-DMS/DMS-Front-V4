import React from 'react';
import * as S from './styles';

interface NoticeTagsListProps {
  NoticeTagItems: Array<React.FC>;
}

const NoticeTagsList: React.FC<NoticeTagsListProps> = ({ NoticeTagItems }) => {
  return <S.NoticeTagsListWrapper>{NoticeTagItems}</S.NoticeTagsListWrapper>;
};

export default NoticeTagsList;
