import { useContext } from 'react';
import { StyledBurger } from './styles';
import { SidebarContext } from '../../../store/sidebar-context';

const Burger = () => {
  const { open, handleTriggerSidebar } = useContext(SidebarContext);

  return (
    <StyledBurger
      open={open}
      onClick={handleTriggerSidebar}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
