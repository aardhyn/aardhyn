import {
  BookmarkIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { styled } from "panda/jsx";
import { H1, Starfield, Card, Section, Link, Greedy } from "component";
import purple from "../asset/purple.jpg";

const FPS = 32;
const ICON_SIZE = "1rem";
const ICON_PROPS = { width: ICON_SIZE, height: ICON_SIZE } as const;

export function Header() {
  return (
    <Root>
      <HeaderCard>
        <Top>
          <Heading>
            <H1>Aardhyn</H1>
            <Sub>Software Engineer</Sub>
          </Heading>
        </Top>
        <Bottom>
          <Link
            href="https://github.com/aardhyn"
            leadingIcon={<GitHubLogoIcon {...ICON_PROPS} />}
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/aardhyn"
            leadingIcon={<LinkedInLogoIcon {...ICON_PROPS} />}
          >
            LinkedIn
          </Link>
          <Greedy />
          <Link
            href="https://www.op.ac.nz/programmes/nzqa/bachelor-of-information-technology"
            leadingIcon={<BookmarkIcon {...ICON_PROPS} />}
          >
            BIT with Distinction
          </Link>
        </Bottom>
        <Starfield fps={FPS} />
        <Image src={purple} alt="abstract purple background" />
      </HeaderCard>
    </Root>
  );
}
const Root = styled(Section, {
  base: {
    minHeight: "200px",
  },
});

const HeaderCard = styled(Card, {
  base: {
    position: "relative", // starfield is absolute
    height: "400px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
  },
});

const Top = styled("div", {
  base: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
const Bottom = styled("div", {
  base: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
  },
});

const Image = styled("img", {
  base: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    filter: "blur(8px)",
    zIndex: -1,
  },
});

const Heading = styled("article", {
  base: {
    textShadow: "0 0 32px #000",
  },
});
const Sub = styled("h2", {
  base: {
    fontSize: "1.15rem",
    fontWeight: 500,
    color: "#ccc",
    marginTop: "-4px",
  },
});
