import React from 'react';
import * as S from './style';

interface ApplyExtensionClassButtonProps {
  initial: string,
  name: string
}

const ApplyExtensionClassButton: React.FC<ApplyExtensionClassButtonProps> = ({initial, name}) => {
  return (
    <S.ApplyExtensionClassButtonWrapper>
      { name }
    </S.ApplyExtensionClassButtonWrapper>
  )
}

export default ApplyExtensionClassButton;