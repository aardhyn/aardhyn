import { styled } from "../constant/stitches.config";
import { WARM, COOL } from "../constant/gradient";

export const H1 = styled("h1", {
  color: "#fff",
  fontSize: "4rem",
  fontWeight: 600,
  margin: 0,
  padding: 0,
});

export const H2 = styled("h2", {
  fontSize: "3rem",
  fontWeight: 600,
  color: "#fff",
  margin: 0,
  padding: 0,
});

export const H3 = styled("h3", {
  fontSize: "2rem",
  fontWeight: 700,
  color: "#fff",
  margin: 0,
  padding: 0,
});

export const A = styled("a", {
  textDecoration: "none",
});

export const P = styled("p", {
  color: "#fff",
  fontSize: "1rem",
  lineHeight: 1.5,
});

export const G = styled("span", {
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
  },
});
