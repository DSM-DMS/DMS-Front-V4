import React from 'react';
import * as S from './style';

interface Props {
  mealInfo: string[];
}

const MealInfo: React.FC<Props> = ({ mealInfo }) => {
  return (
    <>
      {mealInfo === null ? (
        <div></div>
      ) : (
        <>
          {mealInfo.length <= 1 && <S.NoMeal>급식이 없어요</S.NoMeal>}
          <S.InfoContainer>
            {mealInfo.map((infoItem) =>
              infoItem.length < 11 ? (
                <S.InfoItem key={infoItem} isLong={true}>
                  {infoItem}
                </S.InfoItem>
              ) : (
                <S.InfoItem key={infoItem} isLong={false}>
                  {infoItem}
                </S.InfoItem>
              ),
            )}
          </S.InfoContainer>
        </>
      )}
    </>
  );
};

export default MealInfo;
