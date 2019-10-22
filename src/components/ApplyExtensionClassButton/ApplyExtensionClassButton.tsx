import React from 'react';
import * as S from './style';

interface ApplyExtensionClassButtonProps {
  onHandleChangeClass: React.Dispatch<React.SetStateAction<string>>,
  initial: string,
  name: string,
  isSelect: boolean
}

const ApplyExtensionClassButton: React.FC<ApplyExtensionClassButtonProps> = ({onHandleChangeClass, initial, name, isSelect}) => {
  const HandleChangeClass = React.useCallback(() => {
    onHandleChangeClass(initial)
  }, [])

  const isLong = React.useMemo(() => {
    return (initial.length > 1)
  }, [])

  return (
    <S.ApplyExtensionClassButtonWrapper onClick = {HandleChangeClass} isSelect = {isSelect} isLong = {isLong}>
      <span className = "initial">{ initial }</span>
      <span className = "name">{ name }</span>
    </S.ApplyExtensionClassButtonWrapper>
  )
}

export default ApplyExtensionClassButton;