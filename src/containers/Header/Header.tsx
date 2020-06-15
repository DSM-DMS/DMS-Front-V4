import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../modules';
import { changeModal, toggleModal } from '../../modules/modal';
import { ModalTypes } from 'modules/modal';
import { withRouter } from 'react-router-dom';
import { Header } from '../../components';

interface HeaderProps {
  match: any;
  location: any;
  history: any;
  changeModal: (modalType: ModalTypes) => void;
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
    .replace('weekendRest', '호실휴식')
    .replace('mypage', '내 정보')
    .replace('notice', '공지사항');
  return str;
}

const HeaderContainer: React.FC<HeaderProps> = ({
  match,
  location,
  history,
}) => {
  const [currentRoute, setCurrentRoute] = useState('HOME/급식메뉴');
  const dispatch = useDispatch();
  const modalType = useSelector((state: StoreState) => state.modal.modalType);
  const changeModalType = useCallback(
    (modalType: ModalTypes) => {
      dispatch(changeModal(modalType));
    },
    [modalType],
  );
  const setToggleModal = useCallback(() => {
    dispatch(toggleModal());
  }, []);
  useEffect(() => {
    if (location.pathname === '/') {
      setCurrentRoute('HOME/급식메뉴');
    } else {
      setCurrentRoute(getCurrentRouteString(location.pathname));
    }
  }, [location.pathname]);
  return (
    <Header
      currentRoute={currentRoute}
      changeModalType={changeModalType}
      setToggleModal={setToggleModal}
    />
  );
};

export default withRouter(HeaderContainer);
