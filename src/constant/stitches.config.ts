import { createStitches, CSS as StitchesCSS } from "@stitches/react";

const config = createStitches({
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    xxl: "(min-width: 1536px)",
  },
});
const { styled, css } = config;

export type CSS = StitchesCSS<typeof config>;
export { styled, css, config };
