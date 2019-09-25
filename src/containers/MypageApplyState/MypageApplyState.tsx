import React, { useState, useEffect } from 'react';
import { MypageApplyState, MypageApplyStateListItem } from '../../components';
import MypageStudyIcon from '../../assets/icon/mypage_study_icon.png'
import MypageHomeIcon from '../../assets/icon/mypage_home_icon.png'
import MypageOutIcon from '../../assets/icon/mypage_out_icon.png'



interface MypageApplyStateProps {}

const applyStateStaticData = [
  { imgSrc: MypageStudyIcon, title: '연장신청' },
  { imgSrc: MypageHomeIcon, title: '귀가신청' },
  { imgSrc: MypageOutIcon, title: '외출신청' }
]

const MypageApplyStateContainer: React.FC<MypageApplyStateProps> = ({}) => {
  const [applyStateData, setApplyStateData] = useState([]);
    useEffect(() => {
      const applyState = [
        {
          ...applyStateStaticData[0],
          state: [
            { type: '11시', value: '가온실' },
            { type: '12시', value: '나온실' }
          ]
        },
        {
          ...applyStateStaticData[1],
          state: [
            { type: '', value: '금요귀가' }
          ]
        },
        {
          ...applyStateStaticData[2],
          state: [
            { type: '토요일', value: '신청' },
            { type: '일요일', value: '미신청' }
          ]
        }
      ]
      setApplyStateData(applyState)
    }, []);
  const mypageApplyStateCardList =  applyStateData.map(data => <MypageApplyStateListItem imgSrc={data.imgSrc} title={data.title} state={data.state} key={`apply-${data.title}`}/>)
  return <MypageApplyState mypageApplyStateCardList={mypageApplyStateCardList}/>
}

export default MypageApplyStateContainer