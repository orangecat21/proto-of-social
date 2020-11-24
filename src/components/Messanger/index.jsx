import React from "react";
import s from "./Messanger.module.css";

import Dialogs from "./Dialogs";
import Messages from "./Messages";

const Messanger = (props) => {
    const {state, dispatch} = props;

    return (
        <main className={s.wrapper}>
            <Dialogs dialogList={state.dialogs}/>

            <Messages messages={state.messages}
                      newMessageText={state.newMessageText}
                      dispatch={dispatch}
            />
        </main>
    );
}

export default Messanger;