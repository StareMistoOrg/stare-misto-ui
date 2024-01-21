import styled from 'styled-components';

interface ProjectsProps {}

export const Projects = styled.section<ProjectsProps>`
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ProjectsWrapperProps {}

export const ProjectsWrapper = styled.div<ProjectsWrapperProps>`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.secondary};
`;

interface ProjectsWrapperProps1 {}

export const ProjectsWrapper1 = styled.div<ProjectsWrapperProps1>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  gap: ${({ theme }) => theme.space.threeunits};
  max-width: ${({ theme }) => theme.size.maxwidth};
  padding: ${({ theme }) => `${theme.space.fourunits} ${theme.space.threeunits}`};
`;

interface ProjectsContainerProps {}

export const ProjectsContainer = styled.div<ProjectsContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

interface TitleContainerProps {}

export const TitleContainer = styled.span<TitleContainerProps>`
  color: ${({ theme }) => theme.color.primary100};
  margin-bottom: ${({ theme }) => theme.space.oneandhalfunits};
`;

interface ProjectsHeadingProps {}

export const ProjectsHeading = styled.h2<ProjectsHeadingProps>`
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.oneandhalfunits};
`;

interface ProjectsSubHeadingProps {}

export const ProjectsSubHeading = styled.h3<ProjectsSubHeadingProps>`
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  color: ${({ theme }) => theme.color.gray500};
`;

interface ProjectsListContainerProps {}

export const ProjectsListContainer = styled.div<ProjectsListContainerProps>`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-gap: ${({ theme }) => theme.space.twounits};

  @media ${({ theme }) => theme.media.large} {
    grid-template-columns: 1fr;
  }
`;
