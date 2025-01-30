import { styled } from "panda/jsx";
import signature from "asset/signature.png";

const START_DATE = new Date("2023-02-18");
const START_CONDENSED = START_DATE.getFullYear();

const END_DATE = new Date().getFullYear().toString();
const END_CONDENSED = END_DATE.substring(2, END_DATE.length);

const LOGO_SIZE = 32;

export function Footer() {
  return (
    <Root css={{ opacity: 0.3 }}>
      <span>copyright</span>
      <img
        width={LOGO_SIZE}
        height={LOGO_SIZE}
        src={signature}
        alt="logo"
        loading="lazy"
      />
      <time dateTime={START_DATE.toDateString()}>
        {START_CONDENSED}-{END_CONDENSED}
      </time>
    </Root>
  );
}
const Root = styled("footer", {
  base: {
    color: "#fff",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
    gap: "16px",
    paddingTop: "128px",
  },
});
