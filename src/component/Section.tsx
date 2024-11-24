import { HTMLAttributes, ReactNode } from "react";
import { styled } from "../constant/stitches.config";

export function Section({
  children,
  ...props
}: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <SectionRoot {...props}>
      <ContentRoot>{children}</ContentRoot>
    </SectionRoot>
  );
}

const SectionRoot = styled("section", {
  display: "flex",
  justifyContent: "center",
  width: "100%",
});
export const ContentRoot = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 24,
  width: "100%",
  maxWidth: 1300,
  paddingInline: 24,
  paddingBlock: 64,

  "@sm": {
    paddingBlock: 24,
    paddingInline: 24,
  },
});
