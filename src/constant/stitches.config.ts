import { createStitches, CSS as StitchesCSS } from "@stitches/react";

const config = createStitches({
  media: {
    sm: "(max-width: 900px)",
    md: "(max-width: 1400px)",
  },
});
const { styled, css } = config;

export type CSS = StitchesCSS<typeof config>;
export { styled, css, config };
