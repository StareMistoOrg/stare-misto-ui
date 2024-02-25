import { DesktopMenuWrapper, HomeLink, HomeLinks } from './styles';

const menuList = [
  { id: 1, name: 'Головна' },
  { id: 2, name: 'Новини' },
  { id: 3, name: 'Про Нас' },
  { id: 4, name: 'Події' },
  { id: 5, name: 'Написати Нам', href: '#contact' },
];
interface NavbarProps {
  color?: string;
  hovercolor?: string;
  $flexDirection?: string;
}

const Navbar: React.FC<NavbarProps> = props => {
  const { color, hovercolor, $flexDirection } = props;

  const styles = { color, hovercolor };

  return (
    <DesktopMenuWrapper>
      <HomeLinks $flexDirection={$flexDirection}>
        {menuList.map(menu => (
          <HomeLink
            key={menu.id}
            href={menu.href}
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
