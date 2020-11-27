import NewMessageFrom from "./index";
import {connect} from "react-redux";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/reducers/dialogsReducer";

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogPage.newMessageText,
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
      onSendMessage() {
          dispatch(sendMessageActionCreator());
      },
      onChangeMessageText(text) {
          dispatch(updateNewMessageTextActionCreator(text));
      },
  };
};

const NewMessageFormContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessageFrom);

export default NewMessageFormContainer;