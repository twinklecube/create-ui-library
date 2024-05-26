import * as React from "react";
import { Routes, Route } from "react-router-dom";
import ChipTwinklecube from "../../../src/components/chip/Chip.twinklecube";
import IconTwinklecube from "../../../src/components/icon/Icon.twinklecube";
import Homepage from "../homepage/Homepage";
import CardTwinklecube from "../../../src/components/card/Card.twinklecube";
import MunichCardTwinklecube from "../../../src/components/munich-card/MunichCard.twinklecube";
import { containerWrapper } from "./style.module.css";

const Container = () => {
  return (
    <div className={containerWrapper}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chip" element={<ChipTwinklecube />} />
        <Route path="/icon" element={<IconTwinklecube />} />
        <Route path="/card" element={<CardTwinklecube />} />
        <Route path="/munich-card" element={<MunichCardTwinklecube />} />

        {/*more components come here*/}
      </Routes>
    </div>
  );
};

export default Container;
