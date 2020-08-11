import styled from 'styled-components';

export const ChattingMessageWrapper = styled.div<{ isSentMessage: boolean }>`
  ${(props) =>
    props.isSentMessage
      ? `float: right;
        margin-right: 1.688rem;`
      : `color:#000000;
      margin-left: 1.688rem;`}
`;

export const ChattingMessage = styled.div<{ isSentMessage: boolean }>`
  position: relative;
  display: inline-block;
  ${(props) =>
    props.isSentMessage
      ? `background-color: #00be91;
  color: #fff;`
      : `background-color: #eeefe7;
  color:#000000;`}
  margin-top: 2.25rem;
  max-width: 19.38rem;
  border-radius: 10px;
  padding: 0.8125rem 0.625rem;
  font-size: 1.125rem;
`;

export const MessageInfoWrapper = styled.span<{ isSentMessage: boolean }>`
  display: inline-flex;
  ${(props) =>
    props.isSentMessage
      ? `margin-right: 0.4375rem`
      : `margin-left: 0.4375rem;`};
  vertical-align: bottom;
  flex-direction: column;
`;

export const MessageSentTime = styled.span`
  font-size: 0.8125rem;
  color: #686868;
`;

export const MessageIsReadNumber = styled.span`
  font-size: 0.9375rem;
  color: #000;
`;
