import React, { useState, useRef, useEffect } from 'react';
import * as S from './style';

interface Props {
  mealInfo: string[];
}

const MealInfo: React.FC<Props> = ({ mealInfo }) => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });

  return (
    <S.InfoContainer ref={ref} height={height}>
      {mealInfo.map(infoItem => (
        <S.InfoItem height={height}>{infoItem}</S.InfoItem>
      ))}
    </S.InfoContainer>
  );
};

export default MealInfo;
