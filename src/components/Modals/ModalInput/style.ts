import styled from 'styled-components';
import { globalColor } from '../../../GlobalStyle';

export const ModalInput = styled.input`
  height: 3.125rem;
  border-radius: 0.9375rem;
  background-color: #fff;
  border: 0.0625rem solid #bbbbbb;
  line-height: normal;
  padding-left: 1.125rem;
  font-size: 1rem;
  &:focus {
    border-color: ${globalColor};
  }
`;
