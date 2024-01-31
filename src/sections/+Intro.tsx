import { styled } from "../constant/stitches.config";

export function Intro() {
  return (
    <Root>
      <H1>
        This is <G warm>aardhyn.dev</G>.
        <br />A personal website and playground on the web.
      </H1>
      <P>
        I'm a{" "}
        <G warm strong>
          Software Developer
        </G>{" "}
        in small team developing a website builder and CMS platform.
      </P>
      <P>
        I'm work primarily in{" "}
        <G cool strong>
          {" "}
          React{" "}
        </G>{" "}
        and{" "}
        <G cool strong>
          {" "}
          TypeScript{" "}
        </G>
        day to day, and dabble in game development and systems programming in my
        spare time.
      </P>
    </Root>
  );
}
const Root = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: 24,
  margin: "0 auto",
  padding: "128px 16px",
  maxWidth: 800,
  width: "100%",
});

const P = styled("p", {
  color: "#fff",
  fontWeight: 400,
});

const WARM = "linear-gradient(90deg, #ff5d5d 0%, #5d6dff 100%)";
const COOL = "linear-gradient(90deg, #19cdd6 0%, #82d56c 100%)";

const G = styled("span", {
  variants: {
    warm: {
      true: {
        background: WARM,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
    cool: {
      true: {
        background: COOL,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
    strong: {
      true: {
        fontWeight: 600,
      },
    },
  },
});

const H1 = styled("h1", {
  fontSize: 32,
  color: "#fff",
});
