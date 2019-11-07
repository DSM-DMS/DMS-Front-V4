import React from 'react';
import * as S from './style';

interface Props{
  IconSrc: any
  eatingTime: String
}

const MealCard: React.StatelessComponent<Props>= ({IconSrc,eatingTime}) => {
  return (
    <>
     <S.MealCardContainer>
       <S.MealCardHeader>
         <S.MealCardIcon src={IconSrc}/>
         <S.MealCardName>
           {eatingTime}
         </S.MealCardName>
       </S.MealCardHeader>
       <S.MealInfo>
        
       </S.MealInfo>
     </S.MealCardContainer>
    </>
  );
};

export default MealCard;