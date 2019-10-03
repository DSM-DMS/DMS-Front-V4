import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SideBar } from '../../components';
import { StoreState } from '../../modules';
import { setIsChatOpened } from '../../modules/chat';

interface SideBarProps {}

const SideBarContainer: React.FC<SideBarProps> = ({}) => {
  const dispatch = useDispatch();
  const isChatOpened = useSelector(
    (state: StoreState) => state.chat.isChatOpened,
  );
  const toggleIsChatOpened = () => {
    dispatch(setIsChatOpened(!isChatOpened));
  };
  return <SideBar toggleIsChatOpened={toggleIsChatOpened} />;
};

export default SideBarContainer;
