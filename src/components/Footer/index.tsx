import Navbar from '../Navbar';
import {
  FooterWrapper,
  Footer,
  FooterContainer,
  FooterHeading,
  FooterSeparator,
  FooterContainer2,
  FooterText,
  IconsWrapper,
} from './styles';
import { theme } from '../../theme';
import { Twitter, Instagram, Facebook } from '../../icons';

const FooterComponent: React.FC = () => {
  const { white, secondary } = theme.color;

  const styles = {
    color: white,
    hovercolor: secondary,
  };

  return (
    <FooterWrapper>
      <Footer>
        <FooterContainer>
          <FooterHeading>Старе місто Львів</FooterHeading>
          <Navbar {...styles}/>
        </FooterContainer>

        <FooterSeparator />

        <FooterContainer2>
          <FooterText>© 2023 Міжнародний благодійний фонд Старе місто Львів, All Rights Reserved.</FooterText>
          <IconsWrapper>
            <Twitter />
            <Instagram />
            <Facebook />
          </IconsWrapper>
        </FooterContainer2>
      </Footer>
    </FooterWrapper>
  );
};

export default FooterComponent;
