import React from 'react';
import * as S from './style';

interface Props {
  mealInfo: string[];
}

const MealInfo: React.FC<Props> = ({ mealInfo }) => {
  return (
    <>
      {!mealInfo.length && <S.NoMeal>급식이 없어요</S.NoMeal>}
      {mealInfo && (
        <S.InfoContainer>
          {mealInfo.map(infoItem =>
            infoItem.length < 11 ? (
              <S.InfoItem isLong={true}>{infoItem}</S.InfoItem>
            ) : (
              <S.InfoItem isLong={false}>{infoItem}</S.InfoItem>
            )
          )}
        </S.InfoContainer>
      )}
    </>
  );
};

export default MealInfo;
