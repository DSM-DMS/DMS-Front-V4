import styled from 'styled-components';

export const FooterTeamColumnWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterTeamColumnTeamName = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
`;

export const FooterTeamColumnTeamMember = styled.span`
  font-size: 1.25rem;
  margin-bottom: 2.625rem;

  &:nth-last-of-type(1) {
    margin: 0;
  }
`;
