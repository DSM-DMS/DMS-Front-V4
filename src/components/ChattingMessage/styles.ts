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

export const ChattingSentTime = styled.span<{ isSentMessage: boolean }>`
  font-size: 0.8125rem;
  color: #686868;
  ${(props) =>
    props.isSentMessage ? `margin-right: 0.4375rem` : `margin-left: 0.4375rem;`}
`;
