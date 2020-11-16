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
        this.busyID = this.profilePage._postData.map(item => item.id);
    }

    get postData() {
        return this.profilePage._postData;
    }

    set postData(newPostData) {
        this.profilePage._postData = newPostData;
    }

    setUniqId = () => {
        let rndId = Math.floor(Math.random() * (1 - 10000 + 1)) + 10000;
        if(this.busyID.every(item =>  item !== rndId)) {
            this.busyID.push(rndId);
            return rndId;
        } else {
            this.setUniqId();
        }
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

            console.log(this.postData);
        }
    }
}