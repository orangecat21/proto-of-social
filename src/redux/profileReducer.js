import actionTypes from "./actionTypes";

const profileReducer = (state, action) => {
    if (action.type === actionTypes.ADD_POST) {
        if (state._newPostText) {
            let postObj = {
                message: state._newPostText,
                id: Date.now(),
            };
            state._postData.push(postObj);
            state._newPostText = "";
        }

    } else if (action.type === actionTypes.UPDATE_NEW_POST_TEXT) {
       state._newPostText = action.newText;
    }

    return state;
}

export default profileReducer;