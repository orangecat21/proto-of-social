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

export default class Store {
    constructor() {
        this._state = {};
        this._state.profilePage = {};
        //Имитация прихода первых данных с сервера при инициализации
        this._state.profilePage._postData = postData;
        this._state.profilePage._newPostText = '';
        this._subscriber = () => {
        };
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
        if (action.type === "ADD-POST") {
            if (this.newPostText) {
                let postObj = {
                    message: this.newPostText,
                    id: this.setUniqId(),
                }
                const newPostData = this.postData;
                newPostData.push(postObj);
                this.postData = newPostData;
                this.dispatch({type: "UPDATE-NEW-POST-TEXT", payload: {newText: ''}});
                this._subscriber(this);
            }
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage._newPostText = action.payload.newText;
            this._subscriber(this);
        }
    }
}