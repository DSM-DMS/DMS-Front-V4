import React from 'react';
import { connect } from 'react-redux';
import { NoticePostsTable, NoticePostsTableRow } from '../../components';
import { PostsTable } from '../../modules/notice';

interface NoticePostsTableProps {
  tableItems: Array<PostsTable>;
}

const NoticePostsTableContainer: React.FC<NoticePostsTableProps> = ({
  tableItems,
}) => {
  const postsRows = tableItems.map((data, index) => (
    <NoticePostsTableRow
      date={data.date}
      title={data.title}
      views={data.views}
      contents={data.contents}
      key={`post-row-${data.title}-${index}`}
    />
  ));
  return <NoticePostsTable postsRows={postsRows} />;
};

const mapStateToProps = state => ({
  tableItems: state.notice.tableItems,
});

export default connect(
  mapStateToProps,
  null,
)(NoticePostsTableContainer);
