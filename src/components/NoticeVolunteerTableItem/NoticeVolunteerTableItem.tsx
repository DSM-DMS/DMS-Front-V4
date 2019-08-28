import React from 'react';

import * as S from './styles';

interface NoticeVolunteerTableItemProps {
  volunteerGrade: String;
  volunteerTitle: String;
  volunteerPoint: String;
}

const NoticeVolunteerTableItemContainer: React.StatelessComponent<
  NoticeVolunteerTableItemProps
> = ({ volunteerGrade, volunteerTitle, volunteerPoint }) => {
  return (
    <S.NoticeVolunteerTableItemWrapper>
      <S.NoticeVolunteerTableItemContent contentSize="3.625">
        {volunteerGrade}
      </S.NoticeVolunteerTableItemContent>
      <S.NoticeVolunteerTableItemContent contentSize="52">
        {volunteerTitle}
      </S.NoticeVolunteerTableItemContent>
      <S.NoticeVolunteerTableItemContent contentSize="5.9">
        {volunteerPoint}
      </S.NoticeVolunteerTableItemContent>
    </S.NoticeVolunteerTableItemWrapper>
  );
};

export default NoticeVolunteerTableItemContainer;
