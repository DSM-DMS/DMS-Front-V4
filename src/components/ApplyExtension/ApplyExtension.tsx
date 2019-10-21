import React from 'react'
import * as S from './styles'

interface ApplyExtensionProps {
    classList: React.ReactElement[],
    selectedTime : number,
    onHandleSelectTime : Function
}

const ApplyExtension: React.FC<ApplyExtensionProps> = ({classList, selectedTime, onHandleSelectTime}) => {
    return (
        <S.ApplyExtensionWrapper>
            <S.ApplyExtensionHeaderWrapper>
                <S.ApplyExtensionLeftSideWrapper>
                    <S.ApplyExtensionTitle>
                        연장신청
                    </S.ApplyExtensionTitle>
                    <S.ApplyExtensionStateWrapper>
                        <span>가온실</span>
                        <span>|</span>
                        <span>나온실</span>
                    </S.ApplyExtensionStateWrapper>
                </S.ApplyExtensionLeftSideWrapper>
                <S.ApplyExtensionRightSideWrapper>
                    <S.ApplyExtension11TimeSelector selectedTime = {selectedTime} onClick = {() => {onHandleSelectTime(11)}}>
                        11시
                    </S.ApplyExtension11TimeSelector>
                    <S.ApplyExtension12TimeSelector selectedTime = {selectedTime} onClick = {() => {onHandleSelectTime(12)}}>
                        12시
                    </S.ApplyExtension12TimeSelector>
                </S.ApplyExtensionRightSideWrapper>
            </S.ApplyExtensionHeaderWrapper>
            <S.ApplyExtensionContentWrapper>
                <S.ApplyExtensionClassWrapper>
                    {classList}
                </S.ApplyExtensionClassWrapper>
            </S.ApplyExtensionContentWrapper>
        </S.ApplyExtensionWrapper>
    )
};

export default ApplyExtension;