import { styled } from "../constant/stitches.config";
import purple from "../asset/purple.jpg";

export const Card = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: 24,
  borderRadius: 24,

  "@sm": {
    padding: 16,
    borderRadius: 24,
  },

  border: "1px solid #222",

  backdropFilter: "blur(5px)",

  variants: {
    variant: {
      dreamy: {
        overflow: "hidden",
        "&::before": {
          content: "",
          position: "absolute",
          inset: 0,
          zIndex: -1,
          backgroundImage: `url(${purple})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(16px)",
        },
      },
    },
  },
});
