import React from "react";
import s from "./UserBoard.module.css";

const UserBoard = () => {
    return (
        <section className={s.user}>
            <img src="https://yt3.ggpht.com/a/AATXAJyAFVGj7st1D6jw10hT48NR8r_WhfVJqDNM0vPbeA=s900-c-k-c0xffffffff-no-rj-mo"
                 alt="user avatar"
                 className={s.avatar}
            />
            <h2 className={s.name}>Kirill Borovskikh</h2>
            <address className={s.about}>
                <table>
                    <caption className="visually-hidden">Personal information</caption>
                    <tbody>
                        <tr>
                            <th>Date of Birth:</th>
                            <td>5 feb 1999</td>
                        </tr>
                        <tr>
                            <th>City:</th>
                            <td>Moscow</td>
                        </tr>
                        <tr>
                            <th>Education:</th>
                            <td>UNIVERSITY</td>
                        </tr>
                        <tr>
                            <th>Web Site:</th>
                            <td><a href="/#">Some url</a></td>
                        </tr>
                    </tbody>
                </table>
            </address>
        </section>
    );
}

export default UserBoard;