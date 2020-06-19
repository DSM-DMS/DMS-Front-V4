import React, { memo } from 'react';

import { ApplyGoingoutTime } from '../../components';

interface ApplyGoingoutTimeContainerProps {
  show: boolean
}

const ApplyGoingoutTimeContainer: React.FC<ApplyGoingoutTimeContainerProps> = ({show}) => {
  return (
    <ApplyGoingoutTime show={show}/>
  );
};

export default memo(ApplyGoingoutTimeContainer);