import React from 'react';

import * as S from './styles';

export interface SideBarLinkItemProps {
  path: string;
  iconImg: React.ReactNode;
  linkTitle: string;
}

const SideBarLinkItem: React.StatelessComponent<SideBarLinkItemProps> = ({
  path,
  iconImg,
  linkTitle,
}) => {
  return (
    <S.SideBarLink to={path}>
      <S.SideBarLinkImg src={iconImg} />
      {linkTitle}
    </S.SideBarLink>
  );
};

export default SideBarLinkItem;
