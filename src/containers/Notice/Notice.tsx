import React from 'react';
import { connect } from 'react-redux';
import { NoticeWrapper } from '../../components';

interface NoticeProps {
  tableType: string;
}

const Notice: React.StatelessComponent<NoticeProps> = ({ tableType }) => {
  return <NoticeWrapper tableType={tableType} />;
};

const mapStateToProps = state => ({
  tableType: state.notice.tableType,
});

export default connect(
  mapStateToProps,
  null,
)(Notice);
