import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Chatting } from '../../components';
import { chatActions } from '../../modules/chat';

interface ChattingProps {
  isChatOpen: boolean;
  ChatActions: typeof chatActions;
}

const ChattingContainer: React.FC<ChattingProps> = ({
  isChatOpen,
  ChatActions,
}) => {
  return isChatOpen ? (
    <Chatting setIsChatOpen={chatActions.setIsChatOpen} />
  ) : null;
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
)(ChattingContainer);
