import actionTypes from "../actionTypes";

const initialState = {
    postData: [
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
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_POST:
            if (state.newPostText) {
                let newPost = {
                    message: state.newPostText,
                    id: Date.now(),
                };
                return {
                    ...state,
                    postData: [...state.postData, newPost],
                    newPostText: "",
                };
            }
            return state;

        case actionTypes.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: actionTypes.ADD_POST,
});
export const updateNewPostTextActionCreator = (text) => ({
    type: actionTypes.UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default profileReducer;