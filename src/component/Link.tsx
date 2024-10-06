import { Link2Icon } from "@radix-ui/react-icons";
import { ComponentProps } from "react";
import { styled } from "../constant/stitches.config";
import { A } from "./Typography";

export function Link({
  children,
  ...props
}: { href: string } & ComponentProps<typeof A>) {
  return (
    <LinkRoot {...props}>
      <Link2Icon color="#aaa" />
      <span>{children}</span>
    </LinkRoot>
  );
}
const LinkRoot = styled(A, {
  display: "flex",
  alignItems: "center",
  gap: 8,
  color: "#aaa",
  borderRadius: 8,
  padding: 8,

  background: "transparent",
  transition: "background 200ms",
  "&:hover": { background: "#050505" },
});
