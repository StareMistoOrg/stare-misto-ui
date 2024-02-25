import styled from 'styled-components';

interface ProjectsProps {}

export const Projects = styled.section<ProjectsProps>`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  height: auto;
  justify-content: center;
  width: 100%;
`;

interface ProjectsWrapperProps {}

export const ProjectsWrapper = styled.div<ProjectsWrapperProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;
  width: 100%;

  background-color: ${({ theme }) => theme.color.secondary};
`;

interface ProjectsWrapperProps1 {}

export const ProjectsWrapper1 = styled.div<ProjectsWrapperProps1>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  gap: ${({ theme }) => theme.space.threeunits};
  max-width: ${({ theme }) => theme.size.maxwidth};
  padding: ${({ theme }) => `${theme.space.fourunits} ${theme.space.threeunits}`};
`;

interface ProjectsContainerProps {}

export const ProjectsContainer = styled.div<ProjectsContainerProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

interface ProjectsHeadingProps {}

export const ProjectsHeading = styled.h2<ProjectsHeadingProps>`
  font-size: 48px;
  line-height: 1.6;
  text-shadow: 2px 2px 4px ${({ theme }) => theme.color.primary100};

  color: ${({ theme }) => theme.color.primary300};
  margin-bottom: ${({ theme }) => theme.space.oneandhalfunits};
`;

interface ProjectsSubHeadingProps {}

export const ProjectsSubHeading = styled.h3<ProjectsSubHeadingProps>`
  font-size: 18px;
  line-height: 1.6;
  text-align: center;

  color: ${({ theme }) => theme.color.primary100};
`;

interface ProjectsListContainerProps {}

export const ProjectsListContainer = styled.div<ProjectsListContainerProps>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;

  grid-gap: ${({ theme }) => theme.space.twounits};

  @media ${({ theme }) => theme.media.large} {
    grid-template-columns: 1fr;
  }
`;
