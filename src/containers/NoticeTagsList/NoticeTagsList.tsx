import React, { useState } from 'react';

import { NoticeTagsList, NoticeTagItem } from '../../components';

interface NoticeTagsListProps {}

const NoticeTags = [
  '안내사항',
  'DMS 사용법',
  '공동생활',
  '생활태도',
  '복장/위생',
  '지도불응',
  '무단이탈',
  '기물파손',
  '반입금지 물품',
  '위험행동',
  '태도불량',
  '기타',
  '상점',
  '다벌점 봉사',
];

const NoticeTagsListContainer: React.FC<NoticeTagsListProps> = ({}) => {
  const [selectedTag, setSelectedTag] = useState('안내사항');
  const NoticeTagItems = NoticeTags.map(data => (
    <NoticeTagItem
      tagId={data}
      selectedTag={selectedTag}
      onClickTag={setSelectedTag}
      key={`notice tag - ${data}`}
    />
  ));
  return <NoticeTagsList>{NoticeTagItems}</NoticeTagsList>
};

export default NoticeTagsListContainer;
