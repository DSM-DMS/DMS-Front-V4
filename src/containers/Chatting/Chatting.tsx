import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chatting } from '../../components';
import { StoreState } from '../../modules';
import { setIsChatOpened, setIsChatChecked } from '../../modules/chat';

interface ChattingProps {}

const ChattingContainer: React.FC<ChattingProps> = ({}) => {
  const dispatch = useDispatch();
  const isChatOpened = useSelector(
    (state: StoreState) => state.chat.isChatOpened,
  );
  const setCloseChatting = (isChatOpened: boolean) => {
    dispatch(setIsChatOpened(isChatOpened));
  };
  const setCheckChatting = () => {
    dispatch(setIsChatChecked());
  };

  useEffect(() => {
    if (isChatOpened === true) {
      setCheckChatting();
    }
  }, [isChatOpened]);
  return (
    <Chatting setCloseChatting={setCloseChatting} isChatOpened={isChatOpened} />
  );
};

export default ChattingContainer;
