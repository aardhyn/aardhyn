import { HTMLAttributes, ReactNode } from "react";
import { styled } from "../../styled-system/jsx";

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
    gap: "24px",
    width: "100%",
    maxWidth: "1300px",
    paddingBlock: "24px",
    paddingInline: "24px",

    sm: {
      paddingInline: "24px",
      paddingBlock: "64px",
    },
  },
});
