import { styled } from "../constant/stitches.config";
import { ContentRoot, Section } from "../component/Section";
import { P, G, H3 } from "../component/Typography";

export function Intro() {
  return (
    <Root>
      <H3 css={{ lineHeight: 1.2 }}>
        This is <G warm>aardhyn.dev</G>
        <br />A personal website, on the web
      </H3>
      <Article>
        <P>
          I'm a <G warm>Software Engineer</G> in a small team developing a
          website creation and CMS platform called <G cool>Webstack</G>.
        </P>
        <P>
          I graduated from the <G cool>Bachelor of Information Technology</G>{" "}
          with <G warm>Distinction</G> in 2024 at Otago Polytechnic in Dunedin.
        </P>
      </Article>
    </Root>
  );
}

const Root = styled(Section, {
  borderBlock: "1px solid #222",
  paddingBlock: 48,
  [`& ${ContentRoot}`]: {
    gap: 24,
    maxWidth: 900,
  },
});
const Article = styled("article", {
  display: "flex",
  flexDirection: "column",
  gap: 8,
});
