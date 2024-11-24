import { Card } from "../component/Card";
import { H2, H3, P } from "../component/Typography";
import { PROJECTS, type Project } from "../constant/projects";
import { styled } from "../constant/stitches.config";
import { Section } from "../component/Section";
import { Badge } from "../component/Badge";
import { Link } from "../component/Link";

const GITHUB_PROJECTS_URL = "https://github.com/aardhyn?tab=repositories";

export function Projects() {
  return (
    <Section>
      <H2>Portfolio</H2>
      <P>Recent projects I'm most proud of.</P>
      <ProjectGrid>
        {PROJECTS.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </ProjectGrid>
      <Link href={GITHUB_PROJECTS_URL} css={{ alignSelf: "center" }}>
        All Projects
      </Link>
    </Section>
  );
}
const ProjectGrid = styled("div", {
  display: "grid",
  gap: 24,
  gridTemplateColumns: "repeat(3, minMax(0, 1fr))",

  "@md": { gridTemplateColumns: "repeat(2, 1fr)" },
  "@sm": { gridTemplateColumns: "repeat(1, 1fr)" },
});

function Project({ project }: { project: Project }) {
  const { source, live } = project.link;
  const assetSrc = `/asset/${project.asset}`;

  return (
    <ProjectRoot>
      <ProjectImage loading="lazy" src={assetSrc} alt={project.title} />
      <ProjectBody>
        <ProjectTitle>
          <H3>{project.title}</H3>
          {project.meta && <Badge>{project.meta}</Badge>}
          <ProjectLinks>
            <li>{live && <Link href={live}>Live</Link>}</li>
            <li>{source && <Link href={source}>Source</Link>}</li>
          </ProjectLinks>
        </ProjectTitle>
        <P>{project.description}</P>
      </ProjectBody>
    </ProjectRoot>
  );
}

const ProjectRoot = styled(Card, {
  gap: 24,
  flexDirection: "column",
});
const ProjectBody = styled("article", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: 16,
});
const ProjectTitle = styled("header", {
  display: "flex",
  gap: 16,
  justifyContent: "flex-start",
  alignItems: "center",
});
const ProjectLinks = styled("ul", {
  display: "flex",
  justifyContent: "flex-end",
  flex: 1,
  gap: 8,
});
const ProjectImage = styled("img", {
  height: 150,
  objectFit: "cover",
  objectPosition: "top",
  borderRadius: 8,
  width: "100%",
});
