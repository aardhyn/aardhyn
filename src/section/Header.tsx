import Starfield from "../component/Starfield";
import {
  BookmarkIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { styled } from "../constant/stitches.config";
import { A, H1 } from "../component/Typography";
import { Card } from "../component/Card";
import { Section } from "../component/Section";

const FPS = 32;
const ICON_SIZE = "1rem";

export function Header() {
  return (
    <Root>
      <HeaderCard as="header" variant="dreamy">
        <Top>
          <Heading>
            <H1>Aardhyn</H1>
            <Sub>Software Engineer</Sub>
          </Heading>
        </Top>
        <Bottom>
          <Aside>
            <Link href="https://github.com/aardhyn">
              <GitHubLogoIcon width={ICON_SIZE} height={ICON_SIZE} />
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/aardhyn">
              <LinkedInLogoIcon width={ICON_SIZE} height={ICON_SIZE} />
              LinkedIn
            </Link>
          </Aside>
          <Aside>
            <Link href="https://www.op.ac.nz/programmes/nzqa/bachelor-of-information-technology">
              <BookmarkIcon width={ICON_SIZE} height={ICON_SIZE} />
              BIT with Distinction
            </Link>
          </Aside>
        </Bottom>
        <Starfield fps={FPS} />
      </HeaderCard>
    </Root>
  );
}
const Root = styled(Section, { minHeight: 200 });

const HeaderCard = styled(Card, {
  position: "relative", // starfield is absolute
  height: 400,
  padding: 24,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const Top = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});
const Bottom = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  gap: 16,
});
const Link = styled(A, {
  display: "inline-flex",
  gap: 5,
  alignItems: "center",
  fontSize: "0.8rem",

  transition: "opacity 200ms ease-in-out",
  opacity: 0.5,
  "&:hover": { opacity: 1 },
});

const Aside = styled("aside", {
  display: "flex",
  gap: 16,
});

const Heading = styled("article", { textShadow: "0 0 32px #000" });
const Sub = styled("h2", {
  fontSize: "1.15rem",
  fontWeight: 500,
  color: "#ccc",
  marginTop: -4,
});
