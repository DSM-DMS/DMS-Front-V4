import React from 'react';
import * as S from './styles';
import ChattingMessage from '../ChattingMessage/ChattingMessage';

const ChattingMessagesWrapper: React.FC = () => {
  return (
    <S.ChattingMessageWrapper>
      <ChattingMessage
        isSentMessage={false}
        message="채팅으로 장난하는 학생은 벌점 3점 부여합니다.."
      />
      <ChattingMessage
        isSentMessage={true}
        message="오늘 저녁 점호 내용을 까먹었습니다. 다시 알려주셨으면 좋겠습니다."
      />
    </S.ChattingMessageWrapper>
  );
};

export default ChattingMessagesWrapper;
