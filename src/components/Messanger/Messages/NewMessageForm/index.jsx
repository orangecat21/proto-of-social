import React from "react";
import s from './NewMessageForm.module.css';

const NewMessageFrom = ({newMessageText, onSendMessage, onChangeMessageText}) => {

    const submitHandler = (event) => {
        event.preventDefault();
        onSendMessage();
    };

    const changeHandler = (event) => {
        onChangeMessageText(event.target.value);
    }

    const keyDownFormHandler = (event) => {
        if(event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            submitHandler(event);
        }
    }

    return (
        <form action="#" className={s.wrapper} onSubmit={submitHandler}>
            <textarea name="messageText"
                      placeholder="New message..."
                      className={s.newMessage}
                      value={newMessageText}
                      onChange={changeHandler}
                      onKeyDown={keyDownFormHandler}
            />
            <input type="submit"
                   value="Send"
                   className={s.button}
            />
        </form>
    );
}

export default NewMessageFrom;