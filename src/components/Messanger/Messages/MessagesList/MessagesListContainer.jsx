import MessagesList from "./index";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
      messages: state.dialogPage.messages
  };
};

const MessagesListContainer = connect(mapStateToProps)(MessagesList);

export default MessagesListContainer;