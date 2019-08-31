import React from 'react';
import { connect } from 'react-redux';
import { VolunteerTable } from '../../modules/notice';
import { NoticeVolunteerTableItem } from '../../components';

interface NoticeVolunteerTableProps {
  tableItems: VolunteerTable[];
}

const NoticeVolunteerTableContainer: React.FC<NoticeVolunteerTableProps> = ({
  tableItems,
}) => {
  const volunteerTableItems = tableItems.map(data => (
    <NoticeVolunteerTableItem
      volunteerGrade={data.volunteerGrade}
      volunteerTitle={data.volunteerTitle}
      volunteerPoint={data.volunteerPoint}
    />
  ));
  return <>{volunteerTableItems}</>;
};

const mapStateToProps = state => ({
  tableItems: state.notice.tableItems,
});

export default connect(
  mapStateToProps,
  null,
)(NoticeVolunteerTableContainer);
