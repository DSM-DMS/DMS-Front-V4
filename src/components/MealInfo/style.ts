import styled, { css } from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  margin-left: 2.875rem;
  width: 14.13rem;
  flex-direction: column;
  ${props =>
    props.height >= 210
      ? css`
    height: 19.63rem
    justify-content: space-between
    margin-top: 1rem;`
      : null}
`;

export const InfoItem = styled.span`
  font-size: 1.375rem;
  color: #59545d;
  font-weight: 400;
  ${props =>
    props.height <= 210
      ? css`
          margin-top: 1rem;
        `
      : null}
`;
