import React from 'react';
import { connect } from 'react-redux';
import { NoticeWrapper } from '../../components';

interface NoticeProps {
  selectedTag: string;
}

const Notice: React.StatelessComponent<NoticeProps> = ({ selectedTag }) => {
  return <NoticeWrapper selectedTag={selectedTag} />;
};

const mapStateToProps = state => ({
  selectedTag: state.notice.selectedTag,
});

export default connect(
  mapStateToProps,
  null,
)(Notice);
