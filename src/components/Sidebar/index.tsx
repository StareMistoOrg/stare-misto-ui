import { useContext } from 'react';
import Navbar from '../Navbar';
import { SidebarStyled } from './styles';
import { SidebarContext } from '../../store/sidebar-context';

const Sidebar: React.FC = () => {
  const { open } = useContext(SidebarContext);

  return (
    <SidebarStyled open={open}>
      <Navbar $flexDirection='column' />
    </SidebarStyled>
  );
};
export default Sidebar;
