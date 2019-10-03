import React from 'react';

import { ApplyExtension } from '../../components'

interface ApplyExtensionProps {}

const ApplyExtensionContainer: React.FC<ApplyExtensionProps> = () => {
    const [selectedTime, setSelectTime] = React.useState(11);

    return (
        <ApplyExtension selectedTime = {selectedTime} onHandleSelectTime = {setSelectTime}/>
    )
}

export default ApplyExtensionContainer;