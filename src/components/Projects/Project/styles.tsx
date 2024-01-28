import styled from 'styled-components';

interface ProjectCardProps {}

export const ProjectCard = styled.article<ProjectCardProps>`
  width: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.15);

  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.radius.radius8};

  &::before {
    content: '';
    height: 28px;
    position: absolute;
    right: -0.5rem;
    top: 45px;
    transform: rotate(45deg);
    width: 28px;

    background: ${({ theme }) => theme.color.primary100};
  }

  &::after {
    box-shadow: 4px 4px 15px rgba(26, 35, 126, 0.2);
    content: attr(data-label);
    font-family: 'Roboto', sans-serif;
    position: absolute;
    right: -14px;
    text-align: center;
    top: 25px;

    background: ${({ theme }) => theme.color.primary300};
    border-top-right-radius: ${({ theme }) => theme.radius.radius8};
    color: ${({ theme }) => theme.color.white};
    padding: ${({ theme }) => theme.space.halfunit};
    width: ${({ theme }) => theme.size.large};
  }
`;

interface ProjectCardContainerProps {}

export const ProjectCardContainer = styled.div<ProjectCardContainerProps>`
  align-items: flex-start;
  background: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  position: relative;
  width: 100%;

  gap: ${({ theme }) => theme.space.unit};
  padding: ${({ theme }) => theme.space.twounits};
  border-radius: ${({ theme }) => theme.radius.radius8};
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
