import React from "react";
import s from './Profile.module.css';

import UserBoard from "../UserBoard/UserBoard";

export default function Profile() {
    //TODO начать уходить от BEM нотации когда распилю этот компонент
    return (
        <main className={s.profile}>
            <img src="https://im0-tub-ru.yandex.net/i?id=f039078f7e669e6669e7085fc56494bc&n=13&exp=1"
                 alt="Background"
                 className={s.profile__cover}
            />

            <UserBoard />

            <section className={s.wall}>
                <h3 className={s.wall__title}>My posts</h3>

                <form action="#" className={s['post-form']}>
                    <input type="text"
                           className={s['post-form__text-input']}
                    />
                    <input type="submit"
                           value="Send"
                           className={s['post-form__btn']}
                    />
                </form>

                <ul className={s.posts}>
                    <li className={s.posts__post1}>
                        <img src="https://sovet-doctora73.ru/images/doctors/unnamed.jpg"
                             alt="avatar"
                             className={s['posts__author-avatar']}
                        />
                        <p className={s['posts__post-text']}>Hey, what are you loking for?</p>
                    </li>
                    <li className={s.posts__post2}>
                        <img src="https://sovet-doctora73.ru/images/doctors/unnamed.jpg"
                             alt="avatar"
                             className={s['posts__author-avatar']}
                        />
                        <p className={s['posts__post-text']}>Shut up, chicken</p>
                    </li>
                </ul>
            </section>
        </main>
    );
}