import styled from 'styled-components';

export const MypagePointTitle = styled.span`
  font-size: 1.375rem;
  display: inline-block;
  width: 12.5rem;
  color: #59545d;
`

export const MypagePointBar = styled.p`
  position: relative;
  display: inline-block;
  width: 45vw;
  height: 1.25rem;
  border-radius: 1.25rem;
  background-color: rgba(252, 220, 14, 0.35);
`

export const MypageCurrentPointBar = styled.p`
  position: absolute;
  display: inline-block;
  height: 1.5rem;
  width: ${props =>  {
      if(props.point <= 50)
        return 100 * (props.point / 50)
      else 
        return 100;
    }
  }%;
  transform: translate(0, -50%);
  top: 50%;
  background-color: #fcdc0e;
  border-radius: 1.5rem;
  opacity: 1;
`