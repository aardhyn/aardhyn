import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { styled } from "panda/jsx";
import { H1, Starfield, Card, Section, Link } from "component";
import purple from "asset/purple.jpg";

const LINKS = [
  {
    href: "https://github.com/aardhyn",
    Icon: GitHubLogoIcon,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/aardhyn",
    Icon: LinkedInLogoIcon,
    label: "LinkedIn",
  },
  {
    href: "https://discord.com/invite/e77xpdxhUs",
    Icon: DiscordLogoIcon,
    label: "Discord",
  },
] as const;
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
          {LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              leadingIcon={<link.Icon {...ICON_PROPS} />}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </Link>
          ))}
        </Bottom>
        <Starfield />
        <Image src={purple} alt="abstract purple background" />
      </HeaderCard>
    </Root>
  );
}
const Root = styled(Section, {
  base: {
    "& .section-content": {
      paddingTop: "16px",
      sm: { paddingTop: "32px" },
    },
  },
});

const HeaderCard = styled(Card, {
  base: {
    height: "300px",
    sm: { height: "350px" },
    position: "relative", // child starfield is absolute
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
  },
});

const Top = styled("div", {
  base: {
    padding: "8px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
const Bottom = styled("div", {
  base: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "3px", // aligns better with the corner visually.
    fontSize: { smDown: "0.8rem" },
    "&>*:not(:last-child)": { pr: "16px" }, // apply gap without dead link space
    "&>*:not(:first-child)": { pl: "16px" }, // ''
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
    filter: "blur(18px)",
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
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#ccc",
    marginTop: "-8px",
  },
});
