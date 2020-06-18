import React, { useContext, useState } from 'react'

import { ApplyGoingout } from '../../components'

import { C } from '../../utils'

interface ApplyGoingoutProps {}

interface IDate {
    year: number,
    month: number,
    date: number
}

const date: Date = new Date();
const year: number = date.getFullYear();
const month: number = date.getMonth() + 1;
const _date: number = date.getDate();

const ApplyGoingoutContainer : React.FC<ApplyGoingoutProps> = ({}) => {
    const [selectedDate, setSelectedDate] = useState<IDate>({
        year: year,
        month: month,
        date: _date
    })

    return (
        <C.ApplyGoingoutContext.Provider value={[selectedDate, setSelectedDate]}>
            <ApplyGoingout />
        </C.ApplyGoingoutContext.Provider>
    )
};

export default ApplyGoingoutContainer;