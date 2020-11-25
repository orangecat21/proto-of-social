import actionTypes from "./actionTypes";

const initialState = {
    dialogs: [
        {id: 1, name: 'Lelya'},
        {id: 2, name: 'Varia'},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "I`m fine, thank you"},
    ],
    newMessageText: ''
}

const dialogReducer = (state = initialState, action) => {
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

        default:
            return state;
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