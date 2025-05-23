import Balancer from "react-wrap-balancer";
import { styled } from "panda/jsx";
import { Section, P, G, H2 } from "../component";

export function Intro() {
  return (
    <Section>
      <H2 css={{ lineHeight: 1.2 }}>
        This is <G color="warm">aardhyn.dev</G>
        <br />A personal website, on the web
      </H2>
      <Article>
        <Balancer>
          <P>
            I&apos;m a <G color="warm">Software Engineer</G> with a passion for
            building high quality products with beautiful design solidly based
            on maximizing user value. I&apos;m an invaluable member of a small
            team developing a website builder and CMS platform called{" "}
            <G color="cool">Webstack</G>. Developed and hosted completely within{" "}
            <G color="cool">New Zealand</G>.
          </P>
        </Balancer>
        <Balancer>
          <P>
            Initially starting as a junior, I now maintain the entirety of the
            frontend and contribute heavily to the design and direction of the
            software as we steam ahead towards an official release.
          </P>
        </Balancer>
        <Balancer>
          <P>
            Having graduated from the{" "}
            <G color="warm">Bachelor of Information Technology</G> with{" "}
            <G color="cool">Distinction</G> mid last year, I&apos;ve gained a
            solid foundation in software development, networking, databases,
            quality assurance and CI/CD pipelines, devops (AWS and Azure),
            design patterns and algorithms, and team building/agile (Scrum)
            methodologies.
          </P>
        </Balancer>
        <Balancer>
          <P>
            Outside of my day job, I have a strong interest in low-level and
            systems programming using languages like <G color="cool">Rust</G>{" "}
            and <G color="cool">C++</G>, and aim to shift my career in this
            direction in the next 5 years.
          </P>
        </Balancer>
      </Article>
    </Section>
  );
}

const Article = styled("article", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
});
