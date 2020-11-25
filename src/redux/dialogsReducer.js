import actionTypes from "./actionTypes";

const dialogReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;

        case actionTypes.SEND_MESSAGE:
            if (state.newMessageText) {
                let newMessage = {
                    id: Date.now(),
                    message: state.newMessageText,
                };
                state.messages.push(newMessage);
                state.newMessageText = '';
            }
            return state;

        default: return state;
    }
}

export const sendMessageActionCreator = () => ({
    type: actionTypes.SEND_MESSAGE,
});
export const updateNewMessageTextActionCreator = (text) => ({
    type: actionTypes.UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
});

export default dialogReducer;