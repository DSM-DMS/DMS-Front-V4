import React from 'react';
import { NoticeTagsListContainer } from '../../containers';

import * as S from './styles';

interface NoticeWrapperProps {}

const NoticeWrapper: React.FC<NoticeWrapperProps> = ({}) => {
  return (
    <S.NoticeOuterWrapper>
      <NoticeTagsListContainer />
    </S.NoticeOuterWrapper>
  );
};

export default NoticeWrapper;
