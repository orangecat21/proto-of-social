import React from "react";
import s from "./NewPostForm.module.css";

const NewPostForm = (props) => {
    const {newPostText, dispatch} = props;

    const submitHandler = (event) => {
        event.preventDefault();
        const action = {
            type: "ADD-POST",
        };
        dispatch(action);
    }

    const changeHandler = (event) => {
        const action = {
            type: "UPDATE-NEW-POST-TEXT",
            payload: {
                newText: event.target.value,
            },
        }
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