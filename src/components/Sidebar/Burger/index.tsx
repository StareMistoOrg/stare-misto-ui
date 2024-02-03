import { useContext } from 'react';
import { StyledBurger } from './styles';
import { SidebarContext } from '../../../store/sidebar-context';

const Burger = () => {
  const { open, handleTriggerSidebar } = useContext(SidebarContext);

  if (open) {
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  } else {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
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
