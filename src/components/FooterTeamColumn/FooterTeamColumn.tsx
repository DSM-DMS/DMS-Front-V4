import React from 'react';
import * as S from './styles';

interface FooterTeamColumnProps {
  teamName: string;
  peoplesList: string[];
}

const FooterTeamColumn: React.StatelessComponent<FooterTeamColumnProps> = ({
  teamName,
  peoplesList,
}) => {
  const peoplesRows = peoplesList.map(data => (
    <S.FooterTeamColumnTeamMember key={`footer-${teamName}-team-${data}`}>
      {data}
    </S.FooterTeamColumnTeamMember>
  ));
  return (
    <S.FooterTeamColumnWrapper>
      <S.FooterTeamColumnTeamName>{teamName}</S.FooterTeamColumnTeamName>
      {peoplesRows}
    </S.FooterTeamColumnWrapper>
  );
};

export default FooterTeamColumn;
