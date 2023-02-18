import { styled } from "@stitches/react";
import Starfield from "./component/starfield/Starfield";
import logo from "./asset/logo_w.png";
import portrait from "./asset/portrait.png";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function App() {
  const height = window.innerHeight; // * 0.8;
  return (
    <div className="App">
      <Main>
        <Header css={{ height }}>
          <Starfield width={"100%"} height={"100%"} />
          <Section
            css={{
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
              href="https://www.linkedin.com/in/aardhyn-lavender-521007226"
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
              alt="portrait"
              style={{
                marginTop: 12, // center visually with text
                borderRadius: 24,
                border: "2px solid #333",
              }}
            />
            <div style={{ textShadow: "0 0 16px #bbb" }}>
              <H1>Aardhyn</H1>
              <H2>Software Developer</H2>
            </div>
          </Section>
          <Section css={{ opacity: 0.3 }}>
            <span>copyright</span>
            <img width={32} height={32} src={logo} alt="logo" />
            <span>2022-23</span>
          </Section>
        </Header>
      </Main>
    </div>
  );
}

const A = styled("a", {
  color: "inherit",
  textDecoration: "none",
});
const Main = styled("main", {
  position: "fixed ",
  height: "100vh",
  width: "100vw",
  boxSizing: "border-box",
});

const Header = styled("header", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 1,
  width: "100%",
});

const Section = styled("section", {
  padding: 16,
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 16,
});

const H1 = styled("h1", {
  color: "#fff",
  fontSize: 48,
  fontWeight: 700,
  margin: 0,
  padding: 0,
});

const H2 = styled("h2", {
  fontSize: 18,
  fontWeight: 400,
  color: "#fff",
  margin: 0,
  padding: 0,
});

const H3 = styled("h3", {
  fontSize: 16,
  fontWeight: 400,
  color: "#fff",
  margin: 0,
  padding: 0,
});
