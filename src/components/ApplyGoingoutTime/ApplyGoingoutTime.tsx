import React from 'react';

import { withAnimation } from '../../utils';

import * as S from './styles';

interface ApplyGoingoutTimeProps {
  show: boolean,
  handleAnimationEnd: () => void;
}

const ApplyGoingoutTime: React.FC<ApplyGoingoutTimeProps> = ({show, handleAnimationEnd}) => {
  return (
    <S.ApplyGoingoutTimeWrapper show={show} onAnimationEnd={handleAnimationEnd}>
      jj
    </S.ApplyGoingoutTimeWrapper>
  );
};

export default withAnimation(ApplyGoingoutTime);