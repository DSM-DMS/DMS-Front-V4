import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SideBar } from '../../components';
import { chatActions } from '../../modules/chat';

interface SideBarProps {
  isChatOpened: boolean;
  ChatActions: typeof chatActions;
}

const SideBarContainer: React.FC<SideBarProps> = ({
  isChatOpened,
  ChatActions,
}) => {
  const setIsChatOpened = () => {
    ChatActions.setIsChatOpened(!isChatOpened);
  };
  return <SideBar setIsChatOpened={setIsChatOpened} />;
};

const mapStateToProps = state => ({
  isChatOpened: state.chat.isChatOpened,
});

const mapDispatchToProps = dispatch => ({
  ChatActions: bindActionCreators(chatActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBarContainer);
