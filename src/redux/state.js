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
    }

    get postData() {
        return this.profilePage._postData;
    }

    set postData(newPostData) {
        this.profilePage._postData = newPostData;
    }

    setUniqId = () => {
        return Date.now();
    }

    addNewPost = (message) => {
        if (message) {
            let postObj = {
                message,
                id: this.setUniqId(),
            }
            let newPostData = this.postData;
            newPostData.push(postObj);
            this.postData = newPostData;
            rerenderAllTree(this);
        }
    }
}