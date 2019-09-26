import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Chatting } from '../../components';
import { chatActions } from '../../modules/chat';

interface ChattingProps {
  isChatOpened: boolean;
  ChatActions: typeof chatActions;
}

const ChattingContainer: React.FC<ChattingProps> = ({
  isChatOpened,
  ChatActions,
}) => {
  return (
    <Chatting
      setIsChatOpened={ChatActions.setIsChatOpened}
      isChatOpened={isChatOpened}
    />
  );
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
)(ChattingContainer);
