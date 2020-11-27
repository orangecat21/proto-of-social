import React from "react";
import s from "./Messanger.module.css";

import Messages from "./Messages";
import DialogsContainer from "./Dialogs/DialogsContainer";

const Messanger = () => {
    return (
        <main className={s.wrapper}>
            <DialogsContainer/>
            <Messages/>
        </main>
    );
}

export default Messanger;