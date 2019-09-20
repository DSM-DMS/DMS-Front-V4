import React from 'react';

import * as S from './styles';

export interface SideBarLinkItemProps {
  path: string;
  iconImg: React.ReactNode;
  linkTitle: string;
  currentPath: string;
  setCurrentPath: (currentPath: string) => void;
}

const SideBarLinkItem: React.StatelessComponent<SideBarLinkItemProps> = ({
  path,
  iconImg,
  linkTitle,
  currentPath,
  setCurrentPath,
}) => {
  return (
    <S.SideBarLink
      to={path}
      isCurrentPath={currentPath === path}
      onClick={() => setCurrentPath(path)}
    >
      <S.SideBarLinkImg src={iconImg} />
      {linkTitle}
    </S.SideBarLink>
  );
};

export default SideBarLinkItem;
