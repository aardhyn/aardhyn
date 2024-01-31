import { CubeIcon, GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Section } from "../component/Section";
import { A, H3, P, G } from "../component/Typography";
import { styled } from "../constant/stitches.config";
import type { Project } from "../constant/projects";
import { PROJECTS } from "../constant/projects";
export function Projects() {
  return (
    <Section>
      <H2>Projects</H2>
      <P>
        From hobby projects to Polytechnic assignments. A few stand out I'd like
        to share
      </P>
      <ProjectsRoot>
        {PROJECTS.map((project) => (
          <Project project={project} />
        ))}
      </ProjectsRoot>
    </Section>
  );
}
const ProjectsRoot = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 32,
});

function Project({ project }: { project: Project }) {
  return (
    <ProjectRoot>
      <Graphic large>{project.icon}</Graphic>
      <Content>
        <Title>
          <Graphic small>{project.icon}</Graphic>
          <H3>{project.title}</H3>
        </Title>
        <Links>
          {project.links.live && (
            <A
              href={`https://${project.links.live}`}
              target="_blank"
              referrerPolicy="no-referrer"
              css={{ display: "flex", alignItems: "center" }}
            >
              <GlobeIcon width={24} height={24} color="#fff" />
            </A>
          )}
          {project.links.source && (
            <A
              href={`https://${project.links.source}`}
              target="_blank"
              referrerPolicy="no-referrer"
              css={{ display: "flex", alignItems: "center" }}
            >
              <GitHubLogoIcon width={24} height={24} color="#fff" />
            </A>
          )}
        </Links>
        <P css={{ gridColumnEnd: "span 2" }}>{project.description}</P>
      </Content>
    </ProjectRoot>
  );
}
const ProjectRoot = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: 16,
});
const Graphic = styled("div", {
  alignItems: "center",
  justifyContent: "center",
  background: "#080808",
  "& svg": {
    color: "#fff",
  },

  variants: {
    small: {
      true: {
        display: "flex",
        "@sm": { display: "none" },
        width: 32,
        height: 32,
        borderRadius: 4,
      },
    },
    large: {
      true: {
        display: "none",
        "@sm": { display: "flex" },
        borderRadius: 8,
        width: 64,
        height: 64,
        "& svg": {
          width: 24,
          height: 24,
        },
      },
    },
  },
  defaultVariants: {
    small: false,
    large: true,
  },
});
const Title = styled("span", {
  display: "inline-flex",
  alignItems: "center",
  gap: 12,
});

const Content = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: 12,
});
const Links = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 16,
});

const H2 = styled("h1", {
  fontSize: 32,
  color: "#fff",
});
