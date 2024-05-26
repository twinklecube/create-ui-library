import * as React from 'react';
import {headerWrapper} from "./style.module.css";
import logo from '../../logo.png';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={headerWrapper}>
            <Link to="/"><img src={logo}/></Link>
        </div>
    );
};

export default Header;