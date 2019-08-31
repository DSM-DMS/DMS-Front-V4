import React from 'react'
import * as S from './styles'

interface Data {
    kind: string,
    title : string,
    gohome_time: string | undefined,
    comeback_time: string | undefined,
    description: string | undefined
}

interface ApplyButtonProps {
    data: Data
}

const ApplyStayButton: React.FC<ApplyButtonProps> = ({data}) => {
    return (
        <S.ApplyButtonWrapper>
            <S.ApplyButtonTitleWrapper>
                <S.ApplyButtonIcon alt = {data.kind}/>
                <S.ApplyButtonTitle>
                    { data.title }
                </S.ApplyButtonTitle>
            </S.ApplyButtonTitleWrapper>
            <S.ApplyDescriptionWrapper>
                {                    
                    data.description ? 
                    <S.ApplyDescription>
                        {data.description}
                    </S.ApplyDescription>
                    :
                    <>
                        <S.ApplyDescription>
                            {data.gohome_time}
                        </S.ApplyDescription>
                        <S.ApplyDescription>
                            {data.comeback_time}
                        </S.ApplyDescription>
                    </>
                }
            </S.ApplyDescriptionWrapper>
        </S.ApplyButtonWrapper>
    )
};

export default ApplyStayButton;