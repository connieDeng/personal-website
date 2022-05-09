import StyledProjCard from "./proj-card";
import projContent from "./../assests/content/projects-content";
import {
  StyledProjects,
  StyledProjectLabel,
} from "../styledComponents/projectsCS";
import { StyledCategoryTitle, LeftStyledCategoryTitle } from "./category-title";
import { StyledButton } from "../styledComponents/baseCS";
export default function Projects() {
  return (
    // while this component is called Projects, this eventually becomes
    // a page that houses both projects and extracurriculars
    <StyledProjects className="projects-containter">
      <StyledCategoryTitle text={"PROJECTS"} color={"orange"} />
      <LeftStyledCategoryTitle text={"EXTRACURRICULARS"} color={"orange"} />
      <section className="projects-sub-containter">
        <article className="projects-showcase-container">
          {projContent.map((content, index) => (
            <StyledProjCard
              className="proj-card"
              key={content.id}
              projContent={content}
            />
          ))}
        </article>
        <StyledButton className="proj-button">More projects</StyledButton>
      </section>
      <section className="extra-containter">
        <div>extracurriculars</div>
      </section>
      {/* <StyledProjectLabel text={"PROJECTS"}>PROJECTS</StyledProjectLabel> */}
    </StyledProjects>
  );
}
