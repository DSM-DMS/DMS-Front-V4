import React, { useState } from 'react';
import { MypagePoint } from '../../components';

interface MypagePointProps {
  setPointPage: (isPointPage: boolean) => void;
}

const MypagePointContainer: React.FC<MypagePointProps> = ({ setPointPage }) => {
  const [pointsList, setPointsList] = useState([
    {
      isGood: true,
      point: 2,
      reason: '호실 정리 정돈 우수',
      date: '2019-07-25',
    },
    {
      isGood: false,
      point: 1,
      reason: '잔류신청기간 후 변경',
      date: '2019-05-25',
    },
    {
      isGood: true,
      point: 2,
      reason: '호실 정리 정돈 우수',
      date: '2019-07-25',
    },
    {
      isGood: false,
      point: 1,
      reason: '잔류신청기간 후 변경',
      date: '2019-05-25',
    },
    {
      isGood: true,
      point: 2,
      reason: '호실 정리 정돈 우수',
      date: '2019-07-25',
    },
    {
      isGood: false,
      point: 1,
      reason: '잔류신청기간 후 변경',
      date: '2019-05-25',
    },
  ]);
  return <MypagePoint setPointPage={setPointPage} pointsList={pointsList} />;
};

export default MypagePointContainer;
