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

    set postData(newPostData) {
        this._state.profilePage._postData = newPostData;
    }

    get newPostText() {
        return this._state.profilePage._newPostText;
    }

    setUniqId = () => {
        return Date.now();
    }

    subscribe = (observer) => {
        this._subscriber = observer;
    }

    dispatch = (action) => {
        if (action.type === Store.actionTypes.ADD_POST) {
            if (this.newPostText) {
                let postObj = {
                    message: this.newPostText,
                    id: this.setUniqId(),
                };
                const newPostData = this.postData;
                newPostData.push(postObj);
                this.postData = newPostData;
                this.dispatch({
                    type: Store.actionTypes.UPDATE_NEW_POST_TEXT,
                    newText: '',
                });
                this._subscriber(this);
            }

        } else if (action.type === Store.actionTypes.UPDATE_NEW_POST_TEXT) {
            this._state.profilePage._newPostText = action.newText;
            this._subscriber(this);

        } else if (action.type === Store.actionTypes.UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogPage.newMessageText = action.newText;
            this._subscriber(this);

        } else if (action.type === Store.actionTypes.SEND_MESSAGE) {
            if (this._state.dialogPage.newMessageText) {
                let newMessage = {
                    id: this.setUniqId(),
                    message: this._state.dialogPage.newMessageText,
                };
                this._state.dialogPage.messages.push(newMessage);
                this.dispatch({
                    type: Store.actionTypes.UPDATE_NEW_MESSAGE_TEXT,
                    newText: '',
                });
                this._subscriber(this);
            }
        }
    }

    static addPostActionCreator = () => ({
        type: this.actionTypes.ADD_POST,
    });

    static updateNewPostTextActionCreator = (text) => ({
        type: this.actionTypes.UPDATE_NEW_POST_TEXT,
        newText: text,
    });

    static sendMessageActionCreator = () => ({
        type: this.actionTypes.SEND_MESSAGE,
    });

    static updateNewMessageTextActionCreator = (text) => ({
        type: this.actionTypes.UPDATE_NEW_MESSAGE_TEXT,
        newText: text,
    });

}

Store.actionTypes = {
    ADD_POST: "ADD-POST",
    UPDATE_NEW_POST_TEXT : "UPDATE-NEW-POST-TEXT",
    SEND_MESSAGE: "SEND-MESSAGE",
    UPDATE_NEW_MESSAGE_TEXT: "UPDATE-NEW-MESSAGE-TEXT",
};

export const addPostActionCreator = Store.addPostActionCreator;
export const updateNewPostTextActionCreator = Store.updateNewPostTextActionCreator;
export const sendMessageActionCreator = Store.sendMessageActionCreator;
export const updateNewMessageTextActionCreator = Store.updateNewMessageTextActionCreator;