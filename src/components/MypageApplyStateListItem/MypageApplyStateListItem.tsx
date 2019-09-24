import React from 'react';
import * as S from './styles';

interface MypageApplyStateListItemData {
    type: string;
    value: string;
}

interface MypageApplyStateListItemProps {
    title: string;
    imgSrc: React.ReactNode;
    state: MypageApplyStateListItemData;
}

const MypageApplyStateListItem: React.StatelessComponent<MypageApplyStateListItemProps> = ({title, imgSrc, state}) => {
  return <S.MypageApplyStateListItemWrapper>
      <S.MypageApplyStateListItemTitle>{title}</S.MypageApplyStateListItemTitle>
      <S.MypageApplyStateListItemDataWrapper>
          <S.MypageApplyStateListItemDataTitle>
            {state.type}
          </S.MypageApplyStateListItemDataTitle>
          <S.MypageApplyStateListItemDataValue>
            {state.value}
          </S.MypageApplyStateListItemDataValue>
      </S.MypageApplyStateListItemDataWrapper>
      
  </S.MypageApplyStateListItemWrapper>
}

export default MypageApplyStateListItem;