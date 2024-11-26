import { styled } from "../constant/stitches.config";
import { ContentRoot, Section } from "../component/Section";
import { P, G, H3 } from "../component/Typography";
import Balancer from "react-wrap-balancer";

export function Intro() {
  return (
    <Root>
      <H3 css={{ lineHeight: 1.2 }}>
        This is <G warm>aardhyn.dev</G>
        <br />A personal website, on the web
      </H3>
      <Article>
        <P>
          <Balancer>
            I'm a <G warm>Software Engineer</G> with a passion for building high
            quality and maintainable software. I work in a small team developing
            a website builder and CMS platform called <G cool>Webstack</G>.
            Developed and hosted completely within <G cool>New Zealand</G>.
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
            Having graduated the <G warm>Bachelor of Information Technology</G>{" "}
            with <G cool>Distinction</G> this year, and with <G cool>2 years</G>{" "}
            of experience developing software using <G cool>React</G> and{" "}
            <G cool>TypeScript</G>, I've gained a solid foundation in frontend
            web technologies, networking, databases, and devops. For now, I'm
            continuing to hone my skills as a Software Engineer and invest in
            opportunities to grow into a Full Stack role.
          </Balancer>
        </P>
        <P>
          <Balancer>
            Outside of my day job, I have a strong interest in low-level and
            systems programming using languages like <G cool>Rust</G> and{" "}
            <G cool>C++</G>, and aim to shift my career in this direction in the
            next 5 years.
          </Balancer>
        </P>
      </Article>
    </Root>
  );
}

const Root = styled(Section, {
  borderBlock: "1px solid #222",
  paddingBlock: 48,
});
const Article = styled("article", {
  display: "flex",
  flexDirection: "column",
  gap: 24,
});
