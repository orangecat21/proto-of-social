import React from "react";
import s from "./NewPostForm.module.css";

const NewPostForm = (props) => {
    const {newPostHandler} = props;
    const postElem = React.createRef();

    const submitHandler = (event) => {
        event.preventDefault();
        let text = postElem.current.value;
        newPostHandler(text);
    }

    return (
        <form action="#" className={s['post-form']} onSubmit={event => submitHandler(event)}>
            <textarea name="postText"
                      placeholder="Your`s post..."
                      className={s['post-text']}
                      ref={postElem}
            />
            <input type="submit"
                   value="Send"
                   className={s.button}
            />
        </form>
    );
}
export default NewPostForm;