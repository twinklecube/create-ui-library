import * as React from 'react';
// @ts-ignore
import style from "./style.module.css";
// @ts-ignore
import logo from '../../logo.png'

const Header = () => {
    return (
        <div className={style["header-wrapper"]}>
            <img src={logo}/>
        </div>
    );
};

export default Header;