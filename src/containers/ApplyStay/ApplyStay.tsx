import React from 'react';

import { ApplyStay, ApplyStayButton } from '../../components'

interface ApplyStayProps {}

const ApplyStayContainer: React.FC<ApplyStayProps> = () => {
    const Buttons = [
        {
            kind : 'friday',
            title : '금요귀가',
            gohome_time : '금요일 20시 30분~ 21시 00분 귀가',
            comeback_time : '일요일 08시 30분~ 20시 30분 귀사'
        }, 
        {
            kind : 'saturday',
            title : '토요귀가',
            gohome_time : '금요일 20시 30분~ 21시 00분 귀가',
            comeback_time : '일요일 08시 30분~ 20시 30분 귀사'
        }, 
        {
            kind : 'ret_at_saturday',
            title : '토요귀사',
            gohome_time : '금요일 20시 30분~ 21시 00분 귀가',
            comeback_time : '일요일 08시 30분~ 20시 30분 귀사'
        }, 
        {
            kind : 'stay',
            title : '잔류',
            description : '기숙사에 잔류합니다.'
        }
    ]

    const ButtonsList: React.ReactElement[] = Buttons.map(data => (
            <ApplyStayButton {...data} key = {data.kind}/>
        )
    )

    return (
        <ApplyStay button = {ButtonsList} />
    )
}

export default ApplyStayContainer;