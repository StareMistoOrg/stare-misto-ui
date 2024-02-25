import { useContext } from 'react';
import Navbar from '../Navbar';
import { SidebarActionWrapper, SidebarStyled } from './styles';
import { SidebarContext } from '../../store/sidebar-context';
import { createPortal } from 'react-dom';
import Burger from './Burger';

const Sidebar: React.FC = () => {
  const { open } = useContext(SidebarContext);

  const sidebarContent = (
    <SidebarStyled
      initial={{ x: '-100%' }}
      animate={{ x: open ? 0 : '-100%' }}
      transition={{ type: 'tween' }}
    >
      <SidebarActionWrapper>
        <Burger />
      </SidebarActionWrapper>
      <Navbar $flexDirection='column' />
    </SidebarStyled>
  );

  return createPortal(sidebarContent, document.getElementById('sidebar')!);
};
export default Sidebar;
