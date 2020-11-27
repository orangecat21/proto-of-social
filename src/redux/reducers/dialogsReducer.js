import actionTypes from "../actionTypes";

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
            return {
                ...state,
                newMessageText: action.newText,
            };

        case actionTypes.SEND_MESSAGE:
            if (state.newMessageText) {
                let newMessage = {
                    id: Date.now(),
                    message: state.newMessageText,
                };
                return {
                    ...state,
                    messages: [...state.messages, newMessage],
                    newMessageText: "",
                };
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