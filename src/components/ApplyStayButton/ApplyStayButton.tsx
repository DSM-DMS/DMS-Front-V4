import React from 'react'
import * as S from './styles'

interface ApplyButtonProps {
    kind: string,
    title : string,
    gohome_time: string | undefined,
    comeback_time: string | undefined,
    description: string | undefined
}


const ApplyStayButton: React.FC<ApplyButtonProps> = ({kind, title, description, gohome_time, comeback_time}) => {
    return (
        <S.ApplyButtonWrapper>
            <S.ApplyButtonTitleWrapper>
                <S.ApplyButtonIcon alt = {kind}/>
                <S.ApplyButtonTitle>
                    { title }
                </S.ApplyButtonTitle>
            </S.ApplyButtonTitleWrapper>
            <S.ApplyDescriptionWrapper>
                {                    
                    description ? 
                    <S.ApplyDescription>
                        {description}
                    </S.ApplyDescription>
                    :
                    <>
                        <S.ApplyDescription>
                            {gohome_time}
                        </S.ApplyDescription>
                        <S.ApplyDescription>
                            {comeback_time}
                        </S.ApplyDescription>
                    </>
                }
            </S.ApplyDescriptionWrapper>
        </S.ApplyButtonWrapper>
    )
};

export default ApplyStayButton;