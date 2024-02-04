import { BtnGroup } from '../../styles/Global';
import { Button, ButtonText } from '../ui/Button';
import { HeroHeading, HeroSubHeading, HeroWrapper, HeroWrapper1, HeroWrapper2 } from './styles';

const Hero: React.FC = () => (
  <HeroWrapper>
    <HeroWrapper1>
      <HeroWrapper2>
        <HeroHeading>Старе місто Львів</HeroHeading>
        <HeroSubHeading>Міжнародний Благодійний Фонд</HeroSubHeading>
        <BtnGroup>
          <Button>Задонатити</Button>
          <ButtonText>Про нас →</ButtonText>
        </BtnGroup>
      </HeroWrapper2>
    </HeroWrapper1>
  </HeroWrapper>
);

export default Hero;
