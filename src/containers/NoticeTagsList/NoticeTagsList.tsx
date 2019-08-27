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

const NoticeTagsListContainer: React.FC<NoticeTagsListProps> = ({
  selectedTag,
  NoticeActions,
}) => {
  const NoticeTagItems = NoticeTags.map(data => (
    <NoticeTagItem
      tagContent={data}
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
