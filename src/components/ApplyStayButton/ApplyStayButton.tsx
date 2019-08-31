import React from 'react'
import * as S from './styles'

interface Data {
    kind: string,
    description: string
}

interface ApplyButtonProps {
    data: Data
}

const ApplyStayButton: React.FC<ApplyButtonProps> = ({data}) => {
    return (
        <S.ApplyButtonWrapper>
            <S.ApplyButtonTitleWrapper>
                <span>깔깔</span>
            </S.ApplyButtonTitleWrapper>
        </S.ApplyButtonWrapper>
    )
};

export default ApplyStayButton;