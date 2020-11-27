import React from "react";
import s from "./NewPostForm.module.css";

const NewPostForm = ({defaultPostText, onAddPost, onPostChanged}) => {
    const submitHandler = (event) => {
        event.preventDefault();
        onAddPost();
    }

    const changeHandler = (event) => {
        onPostChanged(event.target.value);
    }

    return (
        <form action="#" className={s['post-form']} onSubmit={submitHandler}>
            <textarea name="postText"
                      placeholder="Your`s post..."
                      className={s['post-text']}
                      value={defaultPostText}
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