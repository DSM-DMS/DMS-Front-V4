import React from 'react'

import * as S from './styles'

interface ApplyStayProps {
    button: React.ReactElement[]
}

const ApplyStay: React.FC<ApplyStayProps> = ({ button }) => {
    console.log(button)
    return (
        <S.ApplyStayWrapper>
            { button }
        </S.ApplyStayWrapper>
    )
};

export default ApplyStay;