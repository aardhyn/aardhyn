import { styled } from "../constant/stitches.config";

export function Intro() {
  return (
    <Root>
      <H1>
        This is <G warm>aardhyn.dev</G>.
        <br />A personal website and playground on the web
      </H1>
      <P>
        I'm a <G warm>Front-end Software Developer</G> in small team developing
        a website builder, and final year{" "}
        <G cool>Bachelor of Information Technology</G> student.
      </P>
      <P>
        I have a love for software engineering with <G cool>React.js</G> and
        <G cool> TypeScript</G>, and low-level application and game engine
        development with <G cool>C++20</G> and <G cool>Web Assembly</G>.
      </P>
    </Root>
  );
}
const Root = styled("section", {
  margin: "0 auto",
  padding: "128px 16px",
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
