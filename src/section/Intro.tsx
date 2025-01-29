import { styled } from "../../styled-system/jsx";
import { ContentRoot, Section } from "../component/Section";
import { P, G, H3 } from "../component/Typography";
import Balancer from "react-wrap-balancer";

export function Intro() {
  return (
    <Root>
      <H3 css={{ lineHeight: 1.2 }}>
        This is <G color="warm">aardhyn.dev</G>
        <br />A personal website, on the web
      </H3>
      <Article>
        <P>
          <Balancer>
            I'm a <G color="warm">Software Engineer</G> with a passion for
            building high quality products with beautiful design. I work in a
            small team developing a website builder and CMS platform called{" "}
            <G color="cool">Webstack</G>. Developed and hosted completely within{" "}
            <G color="cool">New Zealand</G>.
          </Balancer>
        </P>
        <P>
          <Balancer>
            Initially starting as a junior, I now maintain the entirety of the
            frontend and contribute heavily to the design and direction of the
            software as we steam ahead towards an official release.
          </Balancer>
        </P>
        <P>
          <Balancer>
            Having graduated the{" "}
            <G color="warm">Bachelor of Information Technology</G> with{" "}
            <G color="cool">Distinction</G> last year, and with{" "}
            <G color="cool">2 years</G> of experience developing software using{" "}
            <G color="cool">React</G> and <G color="cool">TypeScript</G>, I've
            gained a solid foundation in frontend web technologies, networking,
            databases, and devops. For now, I'm continuing to hone my skills as
            a Software Engineer and invest in opportunities to grow into a Full
            Stack role.
          </Balancer>
        </P>
        <P>
          <Balancer>
            Outside of my day job, I have a strong interest in low-level and
            systems programming using languages like <G color="cool">Rust</G>{" "}
            and <G color="cool">C++</G>, and aim to shift my career in this
            direction in the next 5 years.
          </Balancer>
        </P>
      </Article>
    </Root>
  );
}

const Root = styled(Section, {
  base: {
    borderBlock: "1px solid #222",
    paddingBlock: "48px",
  },
});
const Article = styled("article", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
});
