import React from "react";
import s from "./NewPostForm.module.css";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/state";

const NewPostForm = (props) => {
    const {newPostText, dispatch} = props;

    const submitHandler = (event) => {
        event.preventDefault();
        const action = addPostActionCreator();
        dispatch(action);
    }

    const changeHandler = (event) => {
        const action = updateNewPostTextActionCreator(event.target.value);
        dispatch(action);
    }

    return (
        <form action="#" className={s['post-form']} onSubmit={submitHandler}>
            <textarea name="postText"
                      placeholder="Your`s post..."
                      className={s['post-text']}
                      value={newPostText}
                      onChange={changeHandler}
            />
            <input type="submit"
                   value="Send"
                   className={s.button}
            />
        </form>
    );
}
export default NewPostForm;