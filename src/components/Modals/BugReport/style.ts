import styled from 'styled-components';
import { globalColor } from '../../../GlobalStyle';

export const BugreportInput = styled.textarea`
  resize: none;
  width: 23rem;
  height: 19.94rem;
  -webkit-appearance: none;
  border: 0.0625rem solid #bbbbb;
  border-radius: 0.9375rem;
  font-family: inherit;
  font-size: inherit;
  padding-top: 1.5rem;
  padding-left: 1.438rem;
  padding-right: 1.438rem;
  &:focus {
    border-color: ${globalColor};
  }
`;
