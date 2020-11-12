import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <li className={s.posts__post1}>
            <img src="https://sovet-doctora73.ru/images/doctors/unnamed.jpg"
                 alt="avatar"
                 className={s['author-avatar']}
            />
            <p className={s.text}>{props.message}</p>
        </li>
    );
}

export default Post;