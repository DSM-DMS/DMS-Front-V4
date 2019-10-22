import React from 'react';

import { ApplyExtension, ApplyExtensionClassButton } from '../../components'

interface ApplyExtensionProps {}

const ApplyExtensionContainer: React.FC<ApplyExtensionProps> = () => {
    
    const Class = [
        {
            initial: '가',
            name: '가온실',
            id: 0
        },
        {
            initial: '나',
            name: '나온실',
            id: 1
        },
        {
            initial: '다',
            name: '다온실',
            id: 2
        },
        {
            initial: '라',
            name: '라온실',
            id: 3
        },
        {
            initial: '2층',
            name: '2층 여자 독서실',
            id: 4
        },
        {
            initial: '3층',
            name: '3층 학교측 독서실',
            id: 5
        },
        {
            initial: '3층',
            name: '3층 기숙사측 독서실',
            id: 6
        },
        {
            initial: '3층',
            name: '3층 소파',
            id: 7
        },
        {
            initial: '4층',
            name: '4층 학교측 독서실',
            id: 8
        },
        {
            initial: '4층',
            name: '4층 기숙사측 독서실',
            id: 9
        },
        {
            initial: '5층',
            name: '5층 열린 교실',
            id: 10
        }
    ]
    
    const [selectedTime, setSelectTime] = React.useState(11);
    const [selectedClass, setClass] = React.useState(0);

    const classList: React.ReactElement[] = React.useMemo(() => Class.map(data => (
                <ApplyExtensionClassButton onHandleChangeClass = {setClass} key={data.id} {...data} isSelect={data.id === selectedClass}/>
            )
        )
    , [selectedClass])

    return (
        <ApplyExtension classList = {classList} selectedTime = {selectedTime} onHandleSelectTime = {setSelectTime}/>
    )
}

export default ApplyExtensionContainer;