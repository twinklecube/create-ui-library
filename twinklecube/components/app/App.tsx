import * as React from "react";
import Header from "../header/Header";
import Body from "../body/Body";
import { appWrapper } from "./style.module.css";

const App = () => {
  return (
    <div className={appWrapper}>
      <Header />
      <Body />
    </div>
  );
};

export default App;
