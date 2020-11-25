import actionTypes from "./actionTypes";

const dialogReducer = (state, action) => {
    if (action.type === actionTypes.UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newText;

    } else if (action.type === actionTypes.SEND_MESSAGE) {
        if (state.newMessageText) {
            let newMessage = {
                id: Date.now(),
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
        }
    }

    return state;
}

export default dialogReducer;