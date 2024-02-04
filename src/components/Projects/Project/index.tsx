import {
  Image,
  ImageWrapper,
  ProjectCard,
  ProjectCardContainer,
  ProjectDescription,
  ProjectTitle,
} from './styles';
import img from '../../../assets/project_1.jpg';
import useTimer from '../../../hooks/useTimer';

interface ProjectProp {
  date: string;
  description: string;
  id: number;
  imgPath: string;
  monoPath?: string;
  title: string;
}

const Project: React.FC<ProjectProp> = props => {
  const { days, hours, minutes, seconds } = useTimer(props.date);

  return (
    <ProjectCard data-label={`${days}d ${hours}h ${minutes}m ${seconds}s`}>
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
};

export default Project;
