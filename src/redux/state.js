import {rerenderAllTree} from "../render";

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

export default class State {
    constructor() {
        this.profilePage = {};
        //Имитация прихода первых данных с сервера при инициализации
        this.profilePage._postData = postData;
        this.profilePage._newPostText = '';
    }

    get postData() {
        return this.profilePage._postData;
    }

    set postData(newPostData) {
        this.profilePage._postData = newPostData;
    }

    get newPostText() {
        return this.profilePage._newPostText;
    }

    changeNewPostText = (text) => {
        this.profilePage._newPostText = text;
        rerenderAllTree(this);
    }

    setUniqId = () => {
        return Date.now();
    }

    addNewPost = () => {
        if (this.newPostText) {
            let postObj = {
                message: this.newPostText,
                id: this.setUniqId(),
            }
            const newPostData = this.postData;
            newPostData.push(postObj);
            this.postData = newPostData;
            this.changeNewPostText('');
            rerenderAllTree(this);
        }
    }
}