import React from 'react';
import { MypageStatus } from '../../components';

interface MypageStatusProps {
  setPointPage: (isPointPage: boolean) => void;
}

const MypageStatusContainer: React.FC<MypageStatusProps> = ({
  setPointPage,
}) => {
  return <MypageStatus setPointPage={setPointPage} />;
};

export default MypageStatusContainer;
