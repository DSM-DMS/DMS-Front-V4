import React from 'react';
import {
  NoticeTagsListContainer,
  NoticePostsTableContainer,
  NoticeRulesTableContainer,
  NoticeVolunteerTableContainer,
} from '../../containers';

import * as S from './styles';

interface NoticeWrapperProps {
  tableType: string;
}

const NoticeWrapper: React.StatelessComponent<NoticeWrapperProps> = ({
  tableType,
}) => {
  function renderTable(tableType) {
    switch (tableType) {
      case 'posts':
        return <NoticePostsTableContainer />;
      case 'rules':
        return <NoticeRulesTableContainer />;
      case 'volunteer':
        return <NoticeVolunteerTableContainer />;
      default:
        return null;
    }
  }
  return (
    <S.NoticeOuterWrapper>
      <NoticeTagsListContainer />
      <S.NoticeTableWrapper>{renderTable(tableType)}</S.NoticeTableWrapper>
    </S.NoticeOuterWrapper>
  );
};

export default NoticeWrapper;
