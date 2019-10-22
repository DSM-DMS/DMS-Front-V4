import React from 'react';

import { ApplyExtension, ApplyExtensionClassButton } from '../../components'

interface ApplyExtensionProps {}

const ApplyExtensionContainer: React.FC<ApplyExtensionProps> = () => {
    
    const Class = [
        {
            initial: '가',
            name: '가온실',
        },
        {
            initial: '나',
            name: '나온실',
        },
        {
            initial: '다',
            name: '다온실',
        },
        {
            initial: '라',
            name: '라온실',
        },
        {
            initial: '2층',
            name: '2층 여자 독서실',
        },
        {
            initial: '3층',
            name: '3층 학교측 독서실',
        },
        {
            initial: '3층',
            name: '3층 기숙사측 독서실',
        },
        {
            initial: '3층',
            name: '3층 소파',
        },
        {
            initial: '4층',
            name: '4층 학교측 독서실',
        },
        {
            initial: '4층',
            name: '4층 기숙사측 독서실',
        },
        {
            initial: '5층',
            name: '5층 열린 교실',
        }
    ]
    
    const [selectedTime, setSelectTime] = React.useState(11);
    const [selectedClass, setClass] = React.useState('가');

    const classList: React.ReactElement[] = React.useMemo(() => Class.map(data => (
                <ApplyExtensionClassButton onHandleChangeClass = {setClass} key={data.name} {...data} isSelect={data.initial === selectedClass}/>
            )
        )
    , [selectedClass])

    return (
        <ApplyExtension classList = {classList} selectedTime = {selectedTime} onHandleSelectTime = {setSelectTime}/>
    )
}

export default ApplyExtensionContainer;