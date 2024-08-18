import { styled } from "../constant/stitches.config";
import { Section } from "../component/Section";
import { H2, P, G } from "../component/Typography";

export function Intro() {
  return (
    <Section>
      <H2>
        This is <G warm>aardhyn.dev</G>
        <br />A personal website on the web
      </H2>

      <Spacer />

      <P>
        I'm a{" "}
        <G warm strong>
          Software Engineer
        </G>{" "}
        in a small team developing a website creation and CMS platform called{" "}
        <G warm strong>
          Webstack
        </G>
        .
      </P>
      <P>
        I work primarily in{" "}
        <G cool strong>
          {" "}
          React{" "}
        </G>{" "}
        and{" "}
        <G cool strong>
          {" "}
          TypeScript{" "}
        </G>
        day to day, dabble in low-level programming in my spare time, and play
        heavily modded Minecraft.
      </P>
    </Section>
  );
}

const Spacer = styled("div", {
  height: 16,
});
