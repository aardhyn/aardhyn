import { styled } from "panda/jsx";

export const H1 = styled("h1", {
  base: {
    color: "#fff",
    fontSize: "4rem",
    fontWeight: 700,
    lineHeight: 1.2,
  },
});

export const H2 = styled("h2", {
  base: {
    fontSize: "3rem",
    fontWeight: 700,
    lineHeight: 1.2,
  },
});

export const H3 = styled("h3", {
  base: {
    fontSize: "2rem",
    fontWeight: 700,
  },
});

export const A = styled("a", {
  base: {
    textDecoration: "none",
  },
});

export const P = styled("p", {
  base: {
    fontSize: "rem",
  },
});

const CLIP_PREVENTION = "0.1rem";

export const G = styled("span", {
  base: {
    // note: css BackgroundClip clips text where it overlaps with an adjacent
    // character, (eg: 'gradient-text,' <- 't' overlaps ',') so we need to offset
    // the container to prevent clipping.
    paddingInline: CLIP_PREVENTION,
    marginInline: `-${CLIP_PREVENTION}`,
  },
  variants: {
    color: {
      warm: {
        background: "linear-gradient(90deg, #ff5d5d 0%, #be8fff 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
      cool: {
        background: "linear-gradient(90deg, #19cdd6 0%, #82d56c 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
  },
});
