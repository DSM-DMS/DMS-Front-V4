import React from 'react';
import * as S from './styles';

interface NoticeRulesTableItemProps {
  ruleTitle: String;
  rulePoint: Number;
  selectedTag: String;
}

const NoticeRulesTableItem: React.StatelessComponent<
  NoticeRulesTableItemProps
> = ({ ruleTitle, rulePoint, selectedTag }) => {
  return (
    <S.NoticeRulesTableItemWrapper>
      {ruleTitle}
      <S.NoticeRulesTableItemPoint>
        {selectedTag === '상점' ? `+${rulePoint}` : `-${rulePoint}`}
점
      </S.NoticeRulesTableItemPoint>
    </S.NoticeRulesTableItemWrapper>
  );
};

export default NoticeRulesTableItem;
