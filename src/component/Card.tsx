import { styled } from "../constant/stitches.config";

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
});
