import React from "react";
import s from "./Dialogs.module.css";

import Dialog from "./Dialog";

const Dialogs = (props) => {
    const {dialogList} = props;

    return (
        <section className={s.wrapper}>
            <ul className={s.list}>
                {dialogList.map(item => <Dialog key={item.id} nickName={item.name}/>)}
            </ul>
        </section>
    );
}

export default Dialogs;