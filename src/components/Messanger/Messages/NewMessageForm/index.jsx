import React from "react";
import s from './NewMessageForm.module.css';

import {updateNewMessageTextActionCreator, sendMessageActionCreator} from '../../../../redux/dialogsReducer';

const NewMessageFrom = (props) => {
    const {dispatch, newMessageText} = props;

    const submitHandler = (event) => {
        event.preventDefault();
        const action = sendMessageActionCreator();
        dispatch(action);
    };

    const changeHandler = (event) => {
        const action = updateNewMessageTextActionCreator(event.target.value);
        dispatch(action);
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