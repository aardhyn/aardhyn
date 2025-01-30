import React from "react";
import ReactDOM from "react-dom/client";
import { Header, Intro, Footer, Projects } from "section";
import { Greedy } from "component";
import { styled } from "panda/jsx";

import "./index.css";

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
