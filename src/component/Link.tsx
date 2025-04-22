import { ComponentProps, ReactNode } from "react";
import { Link2Icon } from "@radix-ui/react-icons";
import { styled } from "panda/jsx";
import { cva, type RecipeVariantProps } from "panda/css";
import { A } from "./Typography";

type LinkProps = ComponentProps<typeof A> & {
  leadingIcon?: ReactNode | false;
  children: ReactNode;
} & RecipeVariantProps<typeof styles>;

export function Link({
  children,
  leadingIcon = <Link2Icon color="#aaa" />,
  ...props
}: LinkProps) {
  return (
    <LinkRoot {...props}>
      {leadingIcon}
      {children}
    </LinkRoot>
  );
}

const styles = cva({
  base: {
    display: "inline-flex",
    gap: "8px",
    alignItems: "center",

    opacity: 0.5,
    transition: "opacity 200ms ease-in-out",
    "&:hover": { opacity: 1 },
  },
});
const LinkRoot = styled(A, styles);
