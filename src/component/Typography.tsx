import { styled } from "../constant/stitches.config";
import { WARM, COOL } from "../constant/gradient";

export const H1 = styled("h1", {
  color: "#fff",
  fontSize: 64,
  fontWeight: 600,
  margin: 0,
  padding: 0,
});

export const H2 = styled("h2", {
  fontSize: 32,
  fontWeight: 600,
  color: "#fff",
  margin: 0,
  padding: 0,
});

export const H3 = styled("h2", {
  fontSize: 18,
  fontWeight: 700,
  color: "#fff",
  margin: 0,
  padding: 0,
});

export const A = styled("a", {
  color: "inherit",
  textDecoration: "none",
});

export const P = styled("p", {
  color: "#fff",
  fontWeight: 400,
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
    strong: {
      true: {
        fontWeight: 600,
      },
    },
  },
});
