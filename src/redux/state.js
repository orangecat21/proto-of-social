import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";
import actionTypes from "./actionTypes";

const postData = [
    {
        message: "Hello everybody",
        id: 1,
    },
    {
        message: "Shut up, chicken",
        id: 2,
    },
    {
        message: "My name is...",
        id: 3,
    },
];
const dialogsData = [
    {id:1, name: 'Lelya'},
    {id:2, name: 'Varia'},
];
const messagesData = [
    {id:1, message: "Hi"},
    {id:2, message: "How are you?"},
    {id:3, message: "I`m fine, thank you"},
];

export default class Store {
    constructor() {
        this._state = {
            profilePage: {
                _postData: [],
                _newPostText: '',
            },
            dialogPage: {
                dialogs: [],
                messages: [],
                newMessageText: ''
            }
        };
        //Имитация прихода первых данных с сервера при инициализации
        this._state.profilePage._postData = postData;
        this._state.dialogPage.dialogs = dialogsData;
        this._state.dialogPage.messages = messagesData;
        this._subscriber = () => {
        };

    }

    get state() {
        return this._state;
    }

    get postData() {
        return this._state.profilePage._postData;
    }

    get newPostText() {
        return this._state.profilePage._newPostText;
    }

    subscribe = (observer) => {
        this._subscriber = observer;
    }

    dispatch = (action) => {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);

        this._subscriber(this);
    }

    static addPostActionCreator = () => ({
        type: actionTypes.ADD_POST,
    });

    static updateNewPostTextActionCreator = (text) => ({
        type: actionTypes.UPDATE_NEW_POST_TEXT,
        newText: text,
    });

    static sendMessageActionCreator = () => ({
        type: actionTypes.SEND_MESSAGE,
    });

    static updateNewMessageTextActionCreator = (text) => ({
        type: actionTypes.UPDATE_NEW_MESSAGE_TEXT,
        newText: text,
    });

}

export const addPostActionCreator = Store.addPostActionCreator;
export const updateNewPostTextActionCreator = Store.updateNewPostTextActionCreator;
export const sendMessageActionCreator = Store.sendMessageActionCreator;
export const updateNewMessageTextActionCreator = Store.updateNewMessageTextActionCreator;