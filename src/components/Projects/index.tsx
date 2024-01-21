import Project from './Project';
import { projects } from './mockProjectData';
import {
  Projects,
  TitleContainer,
  ProjectsHeading,
  ProjectsWrapper,
  ProjectsWrapper1,
  ProjectsContainer,
  ProjectsSubHeading,
  ProjectsListContainer,
} from './styles';

const ProjectsComponent: React.FC = () => (
  <Projects>
    <ProjectsWrapper>
      <ProjectsWrapper1>
        <ProjectsContainer>
          <TitleContainer>
            <span>Розіграші</span>
            <br></br>
          </TitleContainer>
          <ProjectsHeading>Unlock the Power of Volunteering</ProjectsHeading>
          <ProjectsSubHeading>
            Join our volunteer organization and make a difference in your community
          </ProjectsSubHeading>
        </ProjectsContainer>
        <ProjectsListContainer>
          {projects.map(project => (
            <Project
              key={project.id}
              {...project}
            />
          ))}
        </ProjectsListContainer>
      </ProjectsWrapper1>
    </ProjectsWrapper>
  </Projects>
);

export default ProjectsComponent;
