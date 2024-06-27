import Starfield from "../component/starfield/Starfield";
import portrait from "../asset/portrait.png";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { styled } from "../constant/stitches.config";
import FisheyeArc from "../vector/FisheyeArc";
import { A, H1 } from "../component/Typography";

const PORTRAIT_SIZE = 96;
const PORTRAIT_OFFSET = 16;
const VERTICAL_COVERAGE = 0.5;
const height = window.innerHeight * VERTICAL_COVERAGE;

export function Header() {
  return (
    <Root css={{ height }}>
      <Starfield width={"100%"} height={"100%"} />
      <Top>
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
      </Top>
      <Main>
        <Portrait src={portrait} loading="lazy" />
        <MainText>
          <H1>Aardhyn</H1>
          <Sub>Software Developer</Sub>
        </MainText>
      </Main>

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

const Top = styled(Section, {
  position: "absolute",
  top: 0,
  gap: 24,
  color: "#fff8",

  "& svg": {
    transition: "color 200ms ease-in-out",
    "&:hover": { color: "#ffff" },
  },
});

const Main = styled(Section, { zIndex: 1 });

const MainText = styled("div", {
  textShadow: "0 0 16px #bbb",
});

const Portrait = styled("img", {
  marginTop: PORTRAIT_OFFSET, // center visually with text
  width: PORTRAIT_SIZE,
  aspectRatio: 1,
  borderRadius: 24,
});

const Sub = styled("h2", {
  fontSize: 18,
  fontWeight: 500,
  color: "#eee",
});
