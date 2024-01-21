import React from 'react';

import {
  Image,
  ImageWrapper,
  ProjectCard,
  ProjectCardContainer,
  ProjectDescription,
  ProjectTitle,
} from './styles';
import img from '../../../assets/project_1.jpg';

interface ProjectProp {
  title: string;
  description: string;
  id: number;
  date?: string;
  monoPath?: string;
  imgPath?: any;
}

const Project: React.FC<ProjectProp> = props => (
  <ProjectCard>
    <ProjectCardContainer>
      <ProjectTitle>{props.title}</ProjectTitle>
      <ImageWrapper>
        <Image
          src={img}
          alt='img'
        />
      </ImageWrapper>
      <ProjectDescription>{props.description}</ProjectDescription>
    </ProjectCardContainer>
  </ProjectCard>
);

export default Project;
