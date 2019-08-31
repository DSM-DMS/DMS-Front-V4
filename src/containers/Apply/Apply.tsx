import React, {useState} from 'react'

import { Apply } from '../../components'

interface ApplyProps {}

const ApplyContainer : React.FC<ApplyProps> = () => {
    const [apply, setApply] = useState('stay');
    return (
        <Apply currentView = {apply}/>
    )
};

export default ApplyContainer;