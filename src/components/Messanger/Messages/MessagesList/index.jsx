import React from "react";
import s from "./MessagesList.module.css";

const MessagesList = ({messages}) => {
    return (
        <ul className={s.wrapper}>
            {messages.map(message => <li key={message.id}
                                         className={s.message}>{message.message}</li>)}
        </ul>
    );
}

export default MessagesList;