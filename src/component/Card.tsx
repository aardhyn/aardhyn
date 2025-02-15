import { styled } from "panda/jsx";

export const Card = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #222",
    backdropFilter: "blur(5px)",

    padding: "16px",
    borderRadius: "24px",
  },

  variants: {
    variant: {
      dreamy: {
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          zIndex: -1,
          backgroundImage: `url("asset/purple.jpg")`,
          backgroundPosition: "center",
          filter: "blur(16px)",
        },
      },
    },
  },
});
