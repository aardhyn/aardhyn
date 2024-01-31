import { styled } from "../constant/stitches.config";
import { Section } from "../component/Section";
import { H2, P, G } from "../component/Typography";
import { COOL, WARM } from "../constant/gradient";

export function Intro() {
  return (
    <Section>
      <H2>
        This is <G warm>aardhyn.dev</G>.
        <br />A personal website on the web.
      </H2>
      <P>
        I'm a{" "}
        <G warm strong>
          Software Developer
        </G>{" "}
        in small team developing a website creation and CMS platform called{" "}
        <G warm strong>
          Webstack
        </G>
        .
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
        day to day, and dabble in Game Development and programming in my spare
        time.
      </P>
      <P>
        Outside work I enjoy playing piano, walking my dog, biking from time to
        time, and playing modded Minecraft.
      </P>
    </Section>
  );
}
