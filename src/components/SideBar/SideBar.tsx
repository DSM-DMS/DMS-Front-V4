import React, { useState } from 'react';
import * as S from './styles';
import { SideBarLinkItem, SideBarLinksList } from '..';
import HomeIcon from '../../assets/icon/home.png';
import transferIcon from '../../assets/icon/transfer.png';
import bikeIcon from '../../assets/icon/bike.png';
import pencilIcon from '../../assets/icon/pencil.png';
import alarmIcon from '../../assets/icon/alarm.png';
import bedIcon from '../../assets/icon/bed.png';
import personIcon from '../../assets/icon/person.png';
import chatIcon from '../../assets/icon/chat.png';
import noticeICon from '../../assets/icon/notice.png';
import bugIcon from '../../assets/icon/bug.png';

interface SideBarProps {
  toggleIsChatOpened: () => void;
}

const sideBarLinkSectionsData = [
  {
    sectionName: 'Apply',
    linkItemsList: [
      { path: '/apply/extension', iconImg: pencilIcon, linkTitle: '연장신청' },
      { path: '/apply/stay', iconImg: transferIcon, linkTitle: '잔류신청' },
      { path: '/apply/goingOut', iconImg: bikeIcon, linkTitle: '외출신청' },
      { path: '/apply/music', iconImg: alarmIcon, linkTitle: '기상음악' },
      { path: '/apply/weekendRest', iconImg: bedIcon, linkTitle: '호실휴식' },
    ],
  },
  {
    sectionName: 'etc.',
    linkItemsList: [
      { path: '/etc/mypage', iconImg: personIcon, linkTitle: '내 정보' },
      { path: '/etc/notice', iconImg: noticeICon, linkTitle: '공지사항' },
    ],
  },
];

const SideBar: React.FC<SideBarProps> = ({ toggleIsChatOpened }) => {
  const [currentPath, setCurrentPath] = useState('/');
 
  const sideBarLinkSections = sideBarLinkSectionsData.map(sectionData => {
    return (
      <SideBarLinksList
        sectionName={sectionData.sectionName}
        linkItemLists={sectionData.linkItemsList}
        currentPath={currentPath}
        setCurrentPath={setCurrentPath}
        key={`sidebar-${sectionData.sectionName}`}
      />
    );
  });
  return (
    <S.SideBarWrapper>
      <SideBarLinkItem path="/" iconImg={HomeIcon} linkTitle="HOME" currentPath={currentPath} setCurrentPath={setCurrentPath}/>
      {sideBarLinkSections}
      <S.SideBarButton onClick={toggleIsChatOpened}>
        <S.SideBarButtonImg src={chatIcon} />
        1:1 채팅
      </S.SideBarButton>
      <S.SideBarButton>
        <S.SideBarButtonImg src={bugIcon} />
        버그신고
      </S.SideBarButton>
    </S.SideBarWrapper>
  );
};

export default SideBar;
