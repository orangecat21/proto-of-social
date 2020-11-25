import actionTypes from "./actionTypes";

const profileReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_POST:
            if (state._newPostText) {
                let postObj = {
                    message: state._newPostText,
                    id: Date.now(),
                };
                state._postData.push(postObj);
                state._newPostText = "";
            }
            return state;

        case actionTypes.UPDATE_NEW_POST_TEXT:
            state._newPostText = action.newText;
            return state;

        default:
            return state;
    }
}

export default profileReducer;