import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Header } from '../../components';

interface HeaderProps {
  match: any;
  location: any;
  history: any;
}

function getCurrentRouteString(pathname) {
  const str = pathname
    .replace('/', '')
    .replace('apply', '신청')
    .replace('etc', '부가기능')
    .replace('extension', '연장신청')
    .replace('stay', '잔류신청')
    .replace('goingout', '외출신청')
    .replace('music', '기상음악')
    .replace('weekendrest', '호실휴식')
    .replace('mypage', '내 정보')
    .replace('notice', '공지사항');
  return str;
}

const HeaderContainer: React.FC<HeaderProps> = ({
  location,
}) => {
  const [currentRoute, setCurrentRoute] = useState('HOME/급식메뉴');
  useEffect(() => {
    if (location.pathname === '/') {
      setCurrentRoute('HOME/급식메뉴');
    } else {
      setCurrentRoute(getCurrentRouteString(location.pathname));
    }
  }, [location.pathname]);
  return <Header currentRoute={currentRoute} />;
};

export default withRouter(HeaderContainer);
