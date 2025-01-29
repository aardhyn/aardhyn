import React from "react";
import ReactDOM from "react-dom/client";

import { Header, Intro, Footer } from "./section";
import { Projects } from "./section/Project";
import { Greedy } from "./component/Greedy";

import "./index.css";
import { styled } from "../styled-system/jsx";

const Root = styled("main", { base: { minHeight: "100vh" } });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Root>
      <Header />
      <Intro />
      <Projects />
      <Greedy />
      <Footer />
    </Root>
  </React.StrictMode>
);
