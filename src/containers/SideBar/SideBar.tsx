import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SideBar } from '../../components';
import { StoreState } from '../../modules';
import { setIsChatOpened } from '../../modules/chat';
import { modalTypes, changeModal } from '../../modules/modal';

interface SideBarProps {}

const SideBarContainer: React.FC<SideBarProps> = ({}) => {
  const dispatch = useDispatch();
  const isChatOpened = useSelector(
    (state: StoreState) => state.chat.isChatOpened,
  );
  const modalType = useSelector((state: StoreState) => state.modal.modalType);
  const changeModalType = (modalType: modalTypes) => {
    dispatch(changeModal(modalType));
  };
  const toggleIsChatOpened = () => {
    dispatch(setIsChatOpened(!isChatOpened));
  };
  return (
    <SideBar
      toggleIsChatOpened={toggleIsChatOpened}
      changeModalType={changeModalType}
    />
  );
};

export default SideBarContainer;
``;
