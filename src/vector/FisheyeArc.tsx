import { styled, CSS } from "@stitches/react";

export default function FisheyeArc({ css }: { css: CSS }) {
  const Svg = styled("svg", css);
  return (
    <Svg
      viewBox="0 0 500 131"
      color="currentcolor"
      preserveAspectRatio="none"
      css={css}
    >
      <path
        fill="currentColor"
        d="M 0 0 C -0 79.557 104.925 130.294 250 132.7 C 391.114 135.058 499.973 71.98 500 0 C 500 0 500 1.517 500 137.246 C 500 137.246 332.764 138.004 0 131.943 C -0 131.943 -0 132.342 0 0 Z"
      ></path>
    </Svg>
  );
}
