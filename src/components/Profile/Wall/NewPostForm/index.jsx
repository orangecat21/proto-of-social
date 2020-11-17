import React from "react";
import s from "./NewPostForm.module.css";

const NewPostForm = (props) => {
    const {newPostHandler, newPostText, changeNewPostText} = props;

    const submitHandler = (event) => {
        event.preventDefault();
        newPostHandler();
    }

    const changeHandler = (event) => {
        changeNewPostText(event.target.value);
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