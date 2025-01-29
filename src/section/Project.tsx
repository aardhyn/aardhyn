import { Card } from "../component/Card";
import { H2, H3, P } from "../component/Typography";
import { PROJECTS, type Project } from "../constant/projects";
import { styled } from "../../styled-system/jsx";
import { Section } from "../component/Section";
import { Badge } from "../component/Badge";
import { Link } from "../component/Link";
import { css } from "../../styled-system/css";

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
      <Link href={GITHUB_PROJECTS_URL} className={css({ alignSelf: "center" })}>
        All Projects
      </Link>
    </Section>
  );
}
const ProjectGrid = styled("div", {
  base: {
    display: "grid",
    gap: "24px",
    gridTemplateColumns: "repeat(1, 1fr)",

    lg: { gridTemplateColumns: "repeat(3, minMax(0, 1fr))" },
    sm: { gridTemplateColumns: "repeat(2, 1fr)" },
  },
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
  base: {
    gap: "24px",
    flexDirection: "column",
  },
});
const ProjectBody = styled("article", {
  base: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "16px",
  },
});
const ProjectTitle = styled("header", {
  base: {
    display: "flex",
    gap: "16px",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
const ProjectLinks = styled("ul", {
  base: {
    display: "flex",
    justifyContent: "flex-end",
    flex: 1,
    gap: "8px",
  },
});
const ProjectImage = styled("img", {
  base: {
    height: "150px",
    objectFit: "cover",
    objectPosition: "top",
    borderRadius: "8px",
    width: "100%",
  },
});
