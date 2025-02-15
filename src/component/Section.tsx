import { HTMLAttributes, ReactNode } from "react";
import { styled } from "panda/jsx";

export function Section({
  children,
  ...props
}: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <SectionRoot {...props}>
      <ContentRoot className="section-content">{children}</ContentRoot>
    </SectionRoot>
  );
}

const SectionRoot = styled("section", {
  base: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
});

export const ContentRoot = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "100%",
    maxWidth: "1300px",

    paddingBlock: "48px",
    paddingInline: "16px",

    sm: {
      gap: "24px",
      paddingBlock: "64px",
      paddingInline: "24px",
    },
  },
});
