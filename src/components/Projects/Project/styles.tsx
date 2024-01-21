import styled from 'styled-components';

interface ProjectCardProps {}

export const ProjectCard = styled.article<ProjectCardProps>`
  width: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;

  padding: ${({ theme }) => theme.space.twounits};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.radius.radius8};
`;

interface ProjectCardContainerProps {}

export const ProjectCardContainer = styled.div<ProjectCardContainerProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;

  gap: ${({ theme }) => theme.space.unit};
`;

interface ProjectTitleProps {}

export const ProjectTitle = styled.h3<ProjectTitleProps>`
  font-weight: 600;
  line-height: 28px;
`;

interface ProjectDescriptionProps {}

export const ProjectDescription = styled.p<ProjectDescriptionProps>`
  line-height: 1.6;

  color: ${({ theme }) => theme.color.gray800};
`;

interface ImageProps {}

export const Image = styled.img<ImageProps>`
  max-width: 100%;
  height: auto;

  border-radius: ${({ theme }) => theme.radius.radius8};
`;

interface ImageWrapperProps {}

export const ImageWrapper = styled.div<ImageWrapperProps>`
  display: flex;
  justify-content: center;
  width: 100%;
`;
