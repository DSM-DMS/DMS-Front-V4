import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chatting } from '../../components';
import { StoreState } from '../../modules';
import { setIsChatOpened } from '../../modules/chat';

interface ChattingProps {}

const ChattingContainer: React.FC<ChattingProps> = ({}) => {
  const dispatch = useDispatch();
  const isChatOpened = useSelector(
    (state: StoreState) => state.chat.isChatOpened,
  );
  const setCloseChatting = (isChatOpened: boolean) => {
    dispatch(setIsChatOpened(isChatOpened));
  };
  return (
    <Chatting setCloseChatting={setCloseChatting} isChatOpened={isChatOpened} />
  );
};

export default ChattingContainer;
