import React, { useState } from 'react';

import { Mypage } from '../../components';

interface MypageProps {}

const MypageContainer: React.FC<MypageProps> = () => {
  const [isPointPage, setPointPage] = useState(false);
  return <Mypage isPointPage={isPointPage} setPointPage={setPointPage} />;
};

export default MypageContainer;
