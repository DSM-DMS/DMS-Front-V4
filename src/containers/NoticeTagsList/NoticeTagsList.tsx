import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { noticeActions } from '../../modules/notice';

import { NoticeTagsList, NoticeTagItem } from '../../components';

interface NoticeTagsListProps {
  selectedTag: String;
  NoticeActions: typeof noticeActions;
}

const NoticeTags = [
  { tagContent: '안내사항', tableType: 'posts', staticTableIndex: null },
  { tagContent: 'DMS 사용법', tableType: 'posts', staticTableIndex: null },
  { tagContent: '공동생활', tableType: 'rules', staticTableIndex: 0 },
  { tagContent: '생활태도', tableType: 'rules', staticTableIndex: 1 },
  { tagContent: '복장/위생', tableType: 'rules', staticTableIndex: 2 },
  { tagContent: '지도불응', tableType: 'rules', staticTableIndex: 3 },
  { tagContent: '무단이탈', tableType: 'rules', staticTableIndex: 4 },
  { tagContent: '기물파손', tableType: 'rules', staticTableIndex: 5 },
  { tagContent: '반입금지 물품', tableType: 'rules', staticTableIndex: 6 },
  { tagContent: '위험행동', tableType: 'rules', staticTableIndex: 7 },
  { tagContent: '태도불량', tableType: 'rules', staticTableIndex: 8 },
  { tagContent: '기타', tableType: 'rules', staticTableIndex: 9 },
  { tagContent: '상점', tableType: 'rules', staticTableIndex: 10 },
  { tagContent: '다벌점 봉사', tableType: 'volunteer', staticTableIndex: 11 },
];

const NoticeTagsListContainer: React.FC<NoticeTagsListProps> = ({
  selectedTag,
  NoticeActions,
}) => {
  const NoticeTagItems = NoticeTags.map((data, index) => (
    <NoticeTagItem
      tagContent={data.tagContent}
      tableType={data.tableType}
      staticTableIndex={data.staticTableIndex}
      selectedTag={selectedTag}
      onClickTag={NoticeActions.setSelectedTagThunk}
      key={`notice tag - ${data.tagContent} - ${index}`}
    />
  ));
  return <NoticeTagsList>{NoticeTagItems}</NoticeTagsList>;
};

const mapStateToProps = state => ({
  selectedTag: state.notice.selectedTag,
});

const mapDispatchToProps = dispatch => ({
  NoticeActions: bindActionCreators(noticeActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoticeTagsListContainer);
