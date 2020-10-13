import React from 'react';

import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="app-header header">
                <img src="https://images.squarespace-cdn.com/content/v1/5c82c3b9840b166c2d17d3c9/1557978120510-2H71KJUK3UFGH569FI1R/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwkCFOLgzJj4yIx-vIIEbyWWRd0QUGL6lY_wBICnBy59Ye9GKQq6_hlXZJyaybXpCc/ICG+Logo-Small.png"
                     alt="logo"
                     className="header__logo"
                />
            </header>

            <aside className="app-aside">
                <nav>
                    <ul>
                        <li><a href="/#">Profile</a></li>
                        <li><a href="/#">Messages</a></li>
                        <li><a href="/#">News</a></li>
                        <li><a href="/#">Music</a></li>
                        <li><a href="/#">Settings</a></li>
                    </ul>
                </nav>
            </aside>

            <main className="app-main main">
                <img src="https://im0-tub-ru.yandex.net/i?id=f039078f7e669e6669e7085fc56494bc&n=13&exp=1"
                     alt="Background"
                     className="main__cover"
                />

                <section className="main__profile profile">
                    <img src="https://yt3.ggpht.com/a/AATXAJyAFVGj7st1D6jw10hT48NR8r_WhfVJqDNM0vPbeA=s900-c-k-c0xffffffff-no-rj-mo"
                         alt="user avatar"
                         className="profile__avatar"
                    />
                    <h2 className="profile__name">Kirill B</h2>
                    <address>
                        <ul>
                            <li>Date of Birth:</li>
                            <li>City:</li>
                            <li>Education:</li>
                            <li>Web Site: <a href="/#">some url</a></li>
                        </ul>
                    </address>
                </section>

                <section className="main__wall wall">
                    <h3 className="wall__title">My posts</h3>

                    <form action="#" className="wall__post-form post-form">
                        <input type="text"
                               className="post-form__text-input"
                        />
                        <input type="submit"
                               value="Send"
                               className="post-form__btn"
                        />
                    </form>

                    <ul className="wall__posts posts">
                        <li className="posts__post_1">
                            <img src="https://sovet-doctora73.ru/images/doctors/unnamed.jpg"
                                 alt="avatar"
                                 className="posts__author-avatar"
                            />
                            <p className="posts__post-text">Hey, what are you loking for?</p>
                        </li>
                        <li className="posts__post_2">
                            <img src="https://sovet-doctora73.ru/images/doctors/unnamed.jpg"
                                 alt="avatar"
                                 className="posts__author-avatar"
                            />
                            <p className="posts__post-text">Shut up, chicken</p>
                        </li>
                    </ul>
                </section>


            </main>
        </div>
    );
}

export default App;