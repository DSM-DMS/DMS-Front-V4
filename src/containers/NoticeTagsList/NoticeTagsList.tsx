import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../modules';
import { setSelectedTagThunk } from '../../modules/notice';
import { NoticeTags } from '../../static/notice';

import { NoticeTagsList, NoticeTagItem } from '../../components';

interface NoticeTagsListProps {}

const NoticeTagsListContainer: React.FC<NoticeTagsListProps> = () => {
  const dispatch = useDispatch();
  const selectedTag = useSelector(
    (state: StoreState) => state.notice.selectedTag,
  );

  const setSelectedTag = (
    tagId: string,
    tableType: string,
    staticTableIndex: number,
  ) => {
    return dispatch(setSelectedTagThunk(tagId, tableType, staticTableIndex));
  };

  const NoticeTagItems = NoticeTags.map((data, index) => (
    <NoticeTagItem
      tagContent={data.tagContent}
      tableType={data.tableType}
      staticTableIndex={data.staticTableIndex}
      selectedTag={selectedTag}
      onClickTag={setSelectedTag}
      key={`notice tag - ${data.tagContent} - ${index}`}
    />
  ));
  return <NoticeTagsList>{NoticeTagItems}</NoticeTagsList>;
};

export default NoticeTagsListContainer;
