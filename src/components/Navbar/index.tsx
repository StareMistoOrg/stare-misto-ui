import { DesktopMenuWrapper, HomeLink, HomeLinks } from './styles';

const menuList = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'About' },
  { id: 4, name: 'Events' },
  { id: 5, name: 'Contact' },
];

interface NavbarProps {
  color: string;
  hovercolor: string;
}

const Navbar: React.FC<NavbarProps> = props => {
  const { color, hovercolor } = props;

  const styles = { color, hovercolor };
  return (
    <DesktopMenuWrapper>
      <HomeLinks>
        {menuList.map(menu => (
          <HomeLink
            key={menu.id}
            {...styles}
          >
            {menu.name}
          </HomeLink>
        ))}
      </HomeLinks>
    </DesktopMenuWrapper>
  );
};

export default Navbar;
