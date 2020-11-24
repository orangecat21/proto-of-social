import React from "react";
import s from "./Messages.module.css";
import MessagesList from "./MessagesList";
import NewMessageFrom from "./NewMessageForm";

const Messages = (props) => {
    const {messages, newMessageText, dispatch} = props;
    return (
        <section className={s.wrapper}>
            <MessagesList messages={messages}/>

            <NewMessageFrom newMessageText={newMessageText} dispatch={dispatch}/>
        </section>
    );
}

export default Messages;