import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SideBar } from '../../components';
import { StoreState } from '../../modules';
import { setIsChatOpened } from '../../modules/chat';
import { ModalTypes, changeModal, toggleModal } from '../../modules/modal';

interface SideBarProps {}

const SideBarContainer: React.FC<SideBarProps> = ({}) => {
  const dispatch = useDispatch();
  const isChatOpened = useSelector(
    (state: StoreState) => state.chat.isChatOpened,
  );
  const changeModalType = (modalType: ModalTypes) => {
    dispatch(changeModal(modalType));
  };
  const setToggleModal = () => {
    dispatch(toggleModal());
  };
  const toggleIsChatOpened = () => {
    dispatch(setIsChatOpened(!isChatOpened));
  };
  return (
    <SideBar
      toggleIsChatOpened={toggleIsChatOpened}
      changeModalType={changeModalType}
      setToggleModal={setToggleModal}
    />
  );
};

export default SideBarContainer;
``;
