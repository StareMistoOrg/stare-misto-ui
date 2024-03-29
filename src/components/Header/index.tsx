import { useEffect, useState } from 'react';

import Burger from '../Sidebar/Burger';
import Navbar from '../Navbar';
import logoImg from '../../assets/logo.svg';
import { theme } from '../../theme';

import { HeaderWrapper, Header, Logo, NavWrapper, HeaderContainer } from './styles';

const initHeaderStyle = {
  $borderRadius: '50px',
  width: '90%',
  $maxWidth: theme.size.maxwidth,
};

const headerStyleAfterScrolling = {
  $borderRadius: '0px',
  $ZIndex: 99,
  position: 'fixed',
  top: 0,
  width: '100%',
  $maxWidth: 'unset',
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
        <HeaderContainer>
          <Logo
            src={logoImg}
            alt='Stare misto logo'
          />
          <NavWrapper>
            <Navbar {...styles} />
          </NavWrapper>
          <Burger />
        </HeaderContainer>
      </Header>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
