import * as React from "react";
import SideNav from "../side-nav/SideNav";
import Container from "../container/Container";
import { bodyWrapper } from "./style.module.css";

const Body = () => {
  return (
    <div className={bodyWrapper}>
      <SideNav />
      <Container />
    </div>
  );
};

export default Body;
