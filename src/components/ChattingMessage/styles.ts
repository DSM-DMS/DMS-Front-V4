import styled from 'styled-components';

export const ChattingMessage = styled.div<{ isSentMessage: boolean }>`
  position: relative;
  display: inline-block;
  ${(props) =>
    props.isSentMessage
      ? `background-color: #00be91;
  color: #fff;
  float: right;
  margin-right: 1.688rem;
  `
      : `background-color: #eeefe7;
  color:#000000;
  margin-left: 1.688rem;
`}
  margin-top: 2.25rem;
  max-width: 19.38rem;
  border-radius: 10px;
  padding: 0.8125rem 0.625rem;
  font-size: 1.125rem;
  // &:after {
  //   position: relative;
  //   content: '';
  //   border-style: solid;
  //   border-width: 5px 20px 5px 0;
  //   border-color: transparent red;
  //   display: block;
  //   width: 0;
  //   z-index: 1;
  //   left: -20px;
  //   top: 6px;
  // }
`;
