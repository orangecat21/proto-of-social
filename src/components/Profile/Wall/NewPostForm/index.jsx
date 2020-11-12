import React from "react";
import s from "./NewPostForm.module.css";

const NewPostForm = () => {
    return (
        <form action="#" className={s['post-form']}>
            <textarea name="postText"
                      placeholder="Your`s post..."
                      className={s['post-text']}
            />
            <input type="submit"
                   value="Send"
                   className={s.button}
            />
        </form>
    );
}
export default NewPostForm;