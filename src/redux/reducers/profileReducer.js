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
    user: null,
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

        case actionTypes.SET_USER :
            return {
                ...state,
                user: action.user,
            }

        case actionTypes.REMOVE_USER :
            return {
                ...state,
                user: null,
            }

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

export const setUser = (user) => ({
    type: actionTypes.SET_USER,
    user
});

export  const removeUser = () => ({
    type: actionTypes.REMOVE_USER,
});

export default profileReducer;