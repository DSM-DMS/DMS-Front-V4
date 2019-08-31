import React from 'react'
import * as S from './style'

import { ApplyStayContainer } from '../../containers'

interface ApplyProps {
    state: string
}

const Apply: React.FC<ApplyProps> = ({state}) => {

    let ApplySection = <ApplyStayContainer />;

    switch(state) {
        case 'stay':
            ApplySection = <ApplyStayContainer />;
    }

    return (
        <S.ApplyWrapper>
            { ApplySection }
        </S.ApplyWrapper>
    )
}

export default Apply