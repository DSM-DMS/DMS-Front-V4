import styled from 'styled-components';

export const MealCardContainer = styled.div`
  display: flex;
  width: 19.75rem;
  height: 27.88rem;
  background-color: #fbfbfb;
  border-radius: 1.875rem;
  flex-direction: column;
`;

export const MealCardHeader = styled.div`
  display: flex;
  height: 5.313rem;
  width: 100%;
  align-items: flex-end;
`;

export const MealCardIcon = styled.img`
  width: 3.688rem;
  height: 3.75rem;
  margin-left: 2.125rem;
`;

export const MealCardName = styled.span`
  font-size: 1.25rem;
  color: #59545d;
  font-weight: bold;
  margin-left: 1.25rem;
  align-self: center;
  margin-top: 1.3em;
`;
