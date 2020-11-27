import React from "react";
import s from "./Messages.module.css";
import MessagesListContainer from "./MessagesList/MessagesListContainer";
import NewMessageFormContainer from "./NewMessageForm/NewMessageFormContainer";

const Messages = () => {
    return (
        <section className={s.wrapper}>
            <MessagesListContainer/>

            <NewMessageFormContainer/>
        </section>
    );
}

export default Messages;