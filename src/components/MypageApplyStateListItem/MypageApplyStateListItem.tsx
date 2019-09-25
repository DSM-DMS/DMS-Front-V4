import React from 'react';
import * as S from './styles';

interface MypageApplyStateListItemData {
    type: string;
    value: string;
}

interface MypageApplyStateListItemProps {
    title: string;
    imgSrc: React.ReactNode;
    state: MypageApplyStateListItemData[];
}

const MypageApplyStateListItem: React.StatelessComponent<MypageApplyStateListItemProps> = ({title, imgSrc, state}) => {
  const stateDataList = state.map(d => 
  <S.MypageApplyStateListItemDataItem>
    <S.MypageApplyStateListItemDataTitle>
      {d.type}
    </S.MypageApplyStateListItemDataTitle>
    <S.MypageApplyStateListItemDataValue>
      {d.value}
    </S.MypageApplyStateListItemDataValue>
  </S.MypageApplyStateListItemDataItem>)
  return (
    <S.MypageApplyStateListItemWrapper>
      <S.MypageApplyStateListItemTitle>
        <S.MypageApplyStateListItemDataImg src={imgSrc}/>
        {title}
      </S.MypageApplyStateListItemTitle>
      <S.MypageApplyStateListItemDataWrapper>
        {stateDataList}
      </S.MypageApplyStateListItemDataWrapper>
    </S.MypageApplyStateListItemWrapper>
  )
}

export default MypageApplyStateListItem;