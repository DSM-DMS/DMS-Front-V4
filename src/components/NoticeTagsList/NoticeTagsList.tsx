import React from 'react';
import * as S from './styles';

interface NoticeTagsListProps {
  children: React.ReactNode;
}

const NoticeTagsList: React.FC<NoticeTagsListProps> = ({ children }) => {
  return <S.NoticeTagsListWrapper>{children}</S.NoticeTagsListWrapper>;
};

export default NoticeTagsList;
