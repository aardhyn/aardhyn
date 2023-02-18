import { styled } from "@stitches/react";

export function Intro() {
  return (
    <Root>
      <H1>
        This is <G warm>aardhyn.dev</G>
        <br />
        My personal website and playground on the web.
      </H1>
      <P>
        I'm a Software Developer working with a small team on website building
        software, and final year <G cool>Bachelor of Information Technology</G>{" "}
        student.
      </P>
      <P>
        I have a passion for software development with <G cool>React.js</G> and
        <G cool> TypeScript</G>, and low-level application and game engine
        programming with <G cool>C++20</G>
      </P>
    </Root>
  );
}
const Root = styled("section", {
  margin: "0 auto",
  padding: "256px 16px",
  maxWidth: 800,
  width: "100%",
});

const P = styled("p", {
  color: "#fff",
});

const G = styled("span", {
  variants: {
    warm: {
      true: {
        background: "-webkit-linear-gradient(180deg, #da8b25, #c150a2)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
    cool: {
      true: {
        background: "-webkit-linear-gradient(180deg, #19cdd6, #82d56c)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
  },
});

const H1 = styled("h1", {
  fontSize: 32,
  color: "#fff",
});
