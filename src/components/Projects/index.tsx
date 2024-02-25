import Project from './Project';
import { projects } from './mockProjectData';
import {
  Projects,
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
          <ProjectsHeading>Події</ProjectsHeading>
          <ProjectsSubHeading>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, ducimus!
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
