import { useContext } from 'react';
import Navbar from '../Navbar';
import { SidebarStyled } from './styles';
import { SidebarContext } from '../../store/sidebar-context';
import { createPortal } from 'react-dom';

const Sidebar: React.FC = () => {
  const { open } = useContext(SidebarContext);

  const sidebarContent = (
    <SidebarStyled open={open}>
      <Navbar $flexDirection='column' />
    </SidebarStyled>
  );

  return createPortal(sidebarContent, document.getElementById('sidebar')!);
};
export default Sidebar;
