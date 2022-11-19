import * as React from 'react';
import {Link} from "react-router-dom";
//@ts-ignore
import style from "./style.module.css";

const SideNav = () => {
    return (
        <div className={style["side-nav-wrapper"]}>
            <nav>
                <h4>Atoms</h4>
                    <ul>
                        <li><Link to="/icon">icon</Link></li>
                        <li><Link to="/chip">chip</Link></li>
                        <li><Link to="/card">card</Link></li>
                        {/*more routes come here*/}
                    </ul>

                {/*following is another category*/}
                <h4>Molecules</h4>
                <ul>
                    <li><Link to="/munich-card">munich-card</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNav;
