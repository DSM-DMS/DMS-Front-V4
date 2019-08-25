import React from 'react';
import * as S from './style';
import MypagePointExit from '../../assets/icon/left-arrow.png';
import { MypagePointItem } from '..';
import { MypagePointItemProps } from '../MypagePointItem/MypagePointItem';

interface MypagePointProps {
  setPointPage: (isPointPage: boolean) => void;
  pointsList: Array<MypagePointItemProps>;
}

const MypagePoint: React.FC<MypagePointProps> = ({
  setPointPage,
  pointsList,
}) => {
  const pointsListArr = pointsList.map(data => (
    <MypagePointItem
      isGood={data.isGood}
      point={data.point}
      reason={data.reason}
      date={data.date}
    />
  ));
  return (
    <>
      <S.MypagePointToStatus onClick={() => setPointPage(false)}>
        <S.MypagePointExit src={MypagePointExit} />

        상벌점 내역 확인
      </S.MypagePointToStatus>
      <S.MypagePointsList>{pointsListArr}</S.MypagePointsList>
    </>
  );
};

export default MypagePoint;
