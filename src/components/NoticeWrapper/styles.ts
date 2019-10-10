import styled from 'styled-components';
import { globalColor } from '../../GlobalStyle';

export const NoticeOuterWrapper = styled.div`
  padding: 7.8125rem 5.1875rem 0 5.1875rem;
  box-sizing: border-box;
`;

export const NoticeTableWrapper = styled.div`
  max-height: 26.15625rem;
  overflow-y: overlay;
  &::-webkit-scrollbar {
    width: 0.375rem;
    border: 1px solid #e4e4e4;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.1875rem;
    background-color: ${globalColor};
  }
`;
