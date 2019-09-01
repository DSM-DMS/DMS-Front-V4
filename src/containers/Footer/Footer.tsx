import React from 'react';
import { Footer, FooterTeamColumn } from '../../components';
import { teamList } from '../../static/footer';

interface FooterProps {}

const FooterContainer: React.FC<FooterProps> = ({}) => {
  const teamColumns = teamList.map(data => <FooterTeamColumn {...data} />);
  return <Footer>{teamColumns}</Footer>;
};

export default FooterContainer;
