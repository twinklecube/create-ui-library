import * as React from 'react';
import {Routes, Route} from "react-router-dom";
import ChipTwinklecube from "../../../src/components/chip/Chip.twinklecube";
import IconTwinklecube from "../../../src/components/icon/Icon.twinklecube";
import CardTwinklecube from "../../../src/components/card/Card.twinklecube";
import {Chip} from "../../../dist/esm";
// @ts-ignore
import style from "./style.module.css"

const Container = () => {
    return (
        <div className={style["container-wrapper"]}>
            <Routes>
                {/*<Route path="/chip" element={<ChipTwinklecube />} />*/}
                <Route path="/chip" element={<Chip>zdc</Chip>} />
                <Route path="/icon" element={<IconTwinklecube />} />
                <Route path="/card" element={<CardTwinklecube />} />

                {/*more components come here*/}
            </Routes>
        </div>
    );
};

export default Container;
