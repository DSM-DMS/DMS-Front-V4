import React from 'react';

import { ApplyStay, ApplyStayButton } from '../../components'

interface ApplyStayProps {}

const ApplyStayContainer: React.FC<ApplyStayProps> = () => {
    const Buttons = [
        {
            kind : 'friday',
            title : '금요귀가',
            description : '씹씹상타치'
        }, 
        {
            kind : 'saturday',
            title : '토요귀가',
            description : '하타치'
        }, 
        {
            kind : 'ret_at_saturday',
            title : '토요귀사',
            description : '씹상타치'
        }, 
        {
            kind : 'stay',
            title : '잔류',
            description : '상타치'
        }
    ]

    const ButtonsList: React.ReactElement[] = Buttons.map(data => (
            <ApplyStayButton data = {data} key = {data.kind}/>
        )
    )

    return (
        <ApplyStay button = {ButtonsList} />
    )
}

export default ApplyStayContainer;