import React, {useState} from 'react';
import { MypagePeopleInfo } from '../../components';

interface MypagePeopleInfoProps {}

const MypagePeopleInfoContainer: React.FC<MypagePeopleInfoProps> = ({}) => {
    const [ name, setName ] = useState('정지우');
    const [schoolNumber, setSchoolNumber] = useState('3학년 4반 17번');
    return <MypagePeopleInfo name={name} schoolNumber={schoolNumber}/>
}

export default MypagePeopleInfoContainer