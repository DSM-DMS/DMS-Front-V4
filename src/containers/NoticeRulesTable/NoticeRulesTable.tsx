import React from 'react';
import { connect } from 'react-redux';
import { RulesTable } from '../../modules/notice';
import { NoticeRulesTableItem } from '../../components';

interface NoticeRulesTableProps {
  tableItems: RulesTable[];
  selectedTag: string;
}

const NoticeRulesTableContainer: React.FC<NoticeRulesTableProps> = ({
  tableItems,
  selectedTag,
}) => {
  const rulesTableItems = tableItems.map(data => (
    <NoticeRulesTableItem
      ruleTitle={data.ruleTitle}
      rulePoint={data.rulePoint}
      selectedTag={selectedTag}
      key={`notice-rules-${data.ruleTitle}`}
    />
  ));
  return <>{rulesTableItems}</>;
};

const mapStateToProps = state => ({
  tableItems: state.notice.tableItems,
  selectedTag: state.notice.selectedTag,
});

export default connect(
  mapStateToProps,
  null,
)(NoticeRulesTableContainer);
