import { useContext } from 'react';
import { StyledBurger } from './styles';
import { SidebarContext } from '../../../store/sidebar-context';

const Burger = () => {
  const { open, handleTriggerSidebar } = useContext(SidebarContext);

  if (open) {
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  } else {
    document.body.style.position = '';
    document.body.style.top = '';
  }

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
