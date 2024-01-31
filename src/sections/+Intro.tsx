import { styled } from "../constant/stitches.config";
import { Section } from "../component/Section";
import { H2, P, G } from "../component/Typography";
import { COOL, WARM } from "../constant/gradient";

export function Intro() {
  return (
    <Section>
      <H2>
        This is <G warm>aardhyn.dev</G>.
        <br />A personal website and playground on the web.
      </H2>
      <P>
        I'm a{" "}
        <G warm strong>
          Software Developer
        </G>{" "}
        in small team developing a website builder and CMS platform.
      </P>
      <P>
        I'm work primarily in{" "}
        <G cool strong>
          {" "}
          React{" "}
        </G>{" "}
        and{" "}
        <G cool strong>
          {" "}
          TypeScript{" "}
        </G>
        day to day, and dabble in game development and systems programming in my
        spare time.
      </P>
    </Section>
  );
}
