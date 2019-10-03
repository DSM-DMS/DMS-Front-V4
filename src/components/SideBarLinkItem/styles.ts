import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { globalColor } from '../../GlobalStyle';

export const SideBarLink = styled(Link)`
  display: flex;
  width: 14.25rem;
  height: 3.3125rem;
  border-radius: 0.9375rem;
  margin-bottom: 0.5rem;
  align-items: center;
  color: #59545d;
  text-decoration: none;
  font-size: 1.125rem;

  &:hover {
    background-color: white;
  }
  ${props =>
    props.isNowPath
      ? `background-color: white; 
    color: ${globalColor};
    font-weight: bold;`
      : 'null'}
`;

export const SideBarLinkImg = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  margin-right: 1.6875rem;
  margin-left: 1.7375rem;
`;
