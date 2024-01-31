import Starfield from "../component/starfield/Starfield";
import portrait from "../asset/portrait.png";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { styled } from "../constant/stitches.config";
import FisheyeArc from "../vector/FisheyeArc";
import { A, H1 } from "../component/Typography";

export function Header() {
  const height = window.innerHeight * 0.64;
  return (
    <Root css={{ height }}>
      <Starfield width={"100%"} height={"100%"} />
      <Section
        css={{
          position: "absolute",
          top: 0,
          gap: 24,
          color: "#fff8",
          "& svg": {
            transition: "color 200ms ease-in-out",
            "&:hover": { color: "#ffff" },
          },
        }}
      >
        <A
          href="https://github.com/AardhynLavender"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <GitHubLogoIcon width={24} height={24} />
        </A>
        <A
          href="https://www.linkedin.com/in/aardhyn"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <LinkedInLogoIcon width={24} height={24} />
        </A>
      </Section>
      <Section
        css={{
          alignItems: "center",
          position: "relative",
          zIndex: 100,
        }}
      >
        <img
          width={96}
          height={96}
          src={portrait}
          loading="lazy"
          style={{
            marginTop: 12, // center visually with text
            borderRadius: 24,
            border: "2px solid #333",
          }}
        />
        <div style={{ textShadow: "0 0 16px #bbb" }}>
          <H1>Aardhyn</H1>
          <Sub>Software Developer</Sub>
        </div>
      </Section>
      <FisheyeArc
        css={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "8%",
          "@sm": { height: "24%" },
        }}
      />
    </Root>
  );
}
const Root = styled("header", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1,
  width: "100%",
  background: "-webkit-linear-gradient(270deg, #000, #001)",
});

const Section = styled("section", {
  padding: 16,
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 16,
});

const Sub = styled("h2", {
  fontSize: 18,
  fontWeight: 400,
  color: "#fff",
  margin: 0,
  padding: 0,
});
