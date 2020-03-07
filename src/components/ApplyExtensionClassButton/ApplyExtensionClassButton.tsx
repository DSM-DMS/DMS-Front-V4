import React from 'react';
import * as S from './style';

interface ApplyExtensionClassButtonProps {
  onHandleChangeClass: React.Dispatch<React.SetStateAction<number>>,
  initial: string,
  name: string,
  id: number
  isSelect: boolean,
}

const ApplyExtensionClassButton: React.FC<ApplyExtensionClassButtonProps> = ({onHandleChangeClass, initial, name, id, isSelect}) => {
  const HandleChangeClass = React.useCallback(() => {
    onHandleChangeClass(id)
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