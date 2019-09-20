import React from 'react'
import * as S from './style'

import { ApplyStayContainer, ApplyStateContainer } from '../../containers'

interface ApplyProps {
    currentView: string
}

const Apply: React.FC<ApplyProps> = ({currentView}) => {

    let ApplySection;

    switch(currentView) {
        case 'stay':
            ApplySection = <ApplyStayContainer />;
    }

    console.log(ApplyStateContainer)

    return (
        <S.ApplyWrapper>
            { ApplySection }
            <ApplyStateContainer />
        </S.ApplyWrapper>
    )
}

export default Apply