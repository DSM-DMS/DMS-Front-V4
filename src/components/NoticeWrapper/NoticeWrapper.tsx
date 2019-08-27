import React from 'react';
import {
  NoticeTagsListContainer,
  NoticePostsTableContainer,
} from '../../containers';

import * as S from './styles';

interface NoticeWrapperProps {
  selectedTag: String;
}

const NoticeWrapper: React.StatelessComponent<NoticeWrapperProps> = ({
  selectedTag,
}) => {
  return (
    <S.NoticeOuterWrapper>
      <NoticeTagsListContainer />
      {selectedTag === '안내사항' ? <NoticePostsTableContainer /> : null}
    </S.NoticeOuterWrapper>
  );
};

export default NoticeWrapper;
