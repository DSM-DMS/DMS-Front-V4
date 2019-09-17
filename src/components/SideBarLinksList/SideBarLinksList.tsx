import React from 'react';
import * as S from './styles';
import { SideBarLinkItemProps } from '../SideBarLinkItem/SideBarLinkItem';
import { SideBarLinkItem } from "..";

interface SideBarLinksListProps {
  sectionName: string;
  linkItemLists: SideBarLinkItemProps[];
}

const SideBarLinksList: React.StatelessComponent<SideBarLinksListProps> = ({
  sectionName,
  linkItemLists,
}) => {
  const SideBarLinksArray = linkItemLists.map(data => (
    <SideBarLinkItem
      path={data.path}
      iconImg={data.iconImg}
      linkTitle={data.linkTitle}
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
