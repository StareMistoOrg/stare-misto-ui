import { HeaderWrapper, Header, Logo, NavWrapper, BurgerMenu } from './styles';
import logoImg from '../../assets/logo.svg';
import Navbar from '../Navbar';
import { theme } from '../../theme';
import { useEffect, useState } from 'react';

const initHeaderStyle = {
  $borderRadius: '50px',
  width: '90%',
};

const headerStyleAfterScrolling = {
  $borderRadius: '0px',
  $ZIndex: 99,
  position: 'fixed',
  top: 0,
  width: '100%',
};

const HeaderComponent: React.FC = () => {
  const [headerStyle, setHeaderStyle] = useState(initHeaderStyle);

  const listenScrollEvent = () => {
    window.scrollY > 100 ? setHeaderStyle(headerStyleAfterScrolling) : setHeaderStyle(initHeaderStyle);
  };

  const { black, primary100 } = theme.color;
  const styles = {
    color: black,
    hovercolor: primary100,
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <HeaderWrapper>
      <Header {...headerStyle}>
        <Logo
          src={logoImg}
          alt='Stare misto logo'
        />
        <NavWrapper>
          <Navbar {...styles} />
        </NavWrapper>
        <BurgerMenu>&#9776;</BurgerMenu>
      </Header>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
