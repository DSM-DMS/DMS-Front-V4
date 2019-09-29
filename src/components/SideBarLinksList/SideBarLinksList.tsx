import React from 'react';
import * as S from './styles';
import { SideBarLinkItemProps } from '../SideBarLinkItem/SideBarLinkItem';
import { SideBarLinkItem } from '..';

interface SideBarLinksListProps {
  sectionName: string;
  linkItemLists: SideBarLinkItemProps[];
  currentPath: string;
  setCurrentPath: (currentPath: string) => void;
}

const SideBarLinksList: React.StatelessComponent<SideBarLinksListProps> = ({
  sectionName,
  linkItemLists,
  currentPath,
  setCurrentPath,
}) => {
  const SideBarLinksArray = linkItemLists.map(data => (
    <SideBarLinkItem
      path={data.path}
      iconImg={data.iconImg}
      linkTitle={data.linkTitle}
      currentPath={currentPath}
      setCurrentPath={setCurrentPath}
      key={`sidebar-link-${data.path}`}
    />
  ));
  return (
    <S.SideBarLinkListSection>
      <S.SideBarLinkSectionTitle>{sectionName}</S.SideBarLinkSectionTitle>
      {SideBarLinksArray}
    </S.SideBarLinkListSection>
  );
};

export default SideBarLinksList;
