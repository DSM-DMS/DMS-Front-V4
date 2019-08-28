import React from 'react';
import {
  NoticeTagsListContainer,
  NoticePostsTableContainer,
} from '../../containers';

import * as S from './styles';

interface NoticeWrapperProps {
  tableType: String;
}

const NoticeWrapper: React.StatelessComponent<NoticeWrapperProps> = ({
  tableType,
}) => {
  function renderTable(tableType) {
    if (tableType === 'posts') return <NoticePostsTableContainer />;
    if (tableType === 'rules') return <></>;
    if (tableType === 'volunteer') return <></>;
  }
  return (
    <S.NoticeOuterWrapper>
      <NoticeTagsListContainer />
      <S.NoticeTableWrapper>{renderTable(tableType)}</S.NoticeTableWrapper>
    </S.NoticeOuterWrapper>
  );
};

export default NoticeWrapper;
