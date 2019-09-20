import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SideBar } from '../../components';
import { chatActions } from '../../modules/chat';

interface SideBarProps {
  isChatOpen: boolean;
  ChatActions: typeof chatActions;
}

const SideBarContainer: React.FC<SideBarProps> = ({
  isChatOpen,
  ChatActions,
}) => {
  const setChattingToggle = () => {
    ChatActions.setIsChatOpen(!isChatOpen);
  };
  return <SideBar setChattingToggle={setChattingToggle} />;
};

const mapStateToProps = state => ({
  isChatOpen: state.chat.isChatOpen,
});

const mapDispatchToProps = dispatch => ({
  ChatActions: bindActionCreators(chatActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBarContainer);
