import { styled } from "../constant/stitches.config";
import logo from "../asset/logo_w.png";

const start = "2022";
const end = new Date().getFullYear().toString();
const endCondensed = end.substring(2, end.length);

const logoSize = 32;

export function Footer() {
  return (
    <Root css={{ opacity: 0.3 }}>
      <span>copyright</span>
      <img width={logoSize} height={logoSize} src={logo} alt="logo" />
      <span>
        {start}-{endCondensed}
      </span>
    </Root>
  );
}
const Root = styled("footer", {
  color: "#fff",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 16,
  gap: 16,
});
