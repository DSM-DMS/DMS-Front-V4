import React from 'react';
import { Footer, FooterTeamColumn } from '../../components';
import { teamList } from '../../static/footer';

interface FooterProps {}

const FooterContainer: React.FC<FooterProps> = ({}) => {
  const teamColumns = teamList.map((data, index) => (
    <FooterTeamColumn {...data} key={`footer-${index}-list`} />
  ));
  return <Footer>{teamColumns}</Footer>;
};

export default FooterContainer;
