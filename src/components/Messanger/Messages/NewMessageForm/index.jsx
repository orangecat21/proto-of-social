import React from "react";
import s from './NewMessageForm.module.css';

import {updateNewMessageTextActionCreator, sendMessageActionCreator} from '../../../../redux/state';

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

    return (
        <form action="#" className={s.wrapper} onSubmit={submitHandler}>
            <textarea name="messageText"
                      placeholder="New message..."
                      className={s.newMessage}
                      value={newMessageText}
                      onChange={changeHandler}
            />
            <input type="submit"
                   value="Send"
                   className={s.button}
            />
        </form>
    );
}

export default NewMessageFrom;