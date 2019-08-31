import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { noticeActions } from '../../modules/notice';
import { NoticeTags } from '../../static/notice';

import { NoticeTagsList, NoticeTagItem } from '../../components';

interface NoticeTagsListProps {
  selectedTag: string;
  NoticeActions: typeof noticeActions;
}

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
