import React from "react";
import s from "./NewPostForm.module.css";

const NewPostForm = () => {

    const postElem = React.createRef();

    const submitHandler = (event) => {
        event.preventDefault();
        let text = postElem.current.value;
        alert(text);
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