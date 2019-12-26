import React from 'react';
import * as S from './style';

export interface Props {}

const AcademicCalendarItem: React.StatelessComponent<Props> = () => {
  return (
    <S.AcademicCalendarItemRow>
      <S.AcademicCalendarItemData>
        정보보안과 대전교육정보원 체헙학습
      </S.AcademicCalendarItemData>
      <S.AcademicCalendarItemData>
        오전 09:00~오후12:00
      </S.AcademicCalendarItemData>
      <S.AcademicCalendarItemData>대전교육정보원</S.AcademicCalendarItemData>
    </S.AcademicCalendarItemRow>
  );
};

export default AcademicCalendarItem;
