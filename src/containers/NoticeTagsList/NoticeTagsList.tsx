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
  { tagContent: '안내사항', tableType: 'posts' },
  { tagContent: 'DMS 사용법', tableType: 'posts' },
  { tagContent: '공동생활', tableType: 'rules' },
  { tagContent: '생활태도', tableType: 'rules' },
  { tagContent: '복장/위생', tableType: 'rules' },
  { tagContent: '지도불응', tableType: 'rules' },
  { tagContent: '무단이탈', tableType: 'rules' },
  { tagContent: '기물파손', tableType: 'rules' },
  { tagContent: '반입금지 물품', tableType: 'rules' },
  { tagContent: '위험행동', tableType: 'rules' },
  { tagContent: '태도불량', tableType: 'rules' },
  { tagContent: '기타', tableType: 'rules' },
  { tagContent: '상점', tableType: 'rules' },
  { tagContent: '다벌점 봉사', tableType: 'rules' },
];

const NoticeTagsListContainer: React.FC<NoticeTagsListProps> = ({
  selectedTag,
  NoticeActions,
}) => {
  const NoticeTagItems = NoticeTags.map(data => (
    <NoticeTagItem
      tagContent={data.tagContent}
      tableType={data.tableType}
      selectedTag={selectedTag}
      onClickTag={NoticeActions.setSelectedTag}
      key={`notice tag - ${data}`}
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
