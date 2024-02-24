import styled from 'styled-components';

interface StyledBurgerProps {
  open: boolean;
}
export const StyledBurger = styled.button<StyledBurgerProps>`
  background: transparent;
  border: none;
  cursor: pointer;
  display: none;
  flex-direction: column;
  height: 2rem;
  justify-content: space-around;
  padding: 0;
  width: 2rem;
  z-index: 2;

  &:focus {
    outline: none;
  }

  div {
    border-radius: 10px;
    height: 0.25rem;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 2rem;

    background: ${({ theme, open }) => (open ? theme.color.secondary : theme.color.primary100)};

    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media ${({ theme }) => theme.media.medium} {
    display: flex;
  }
`;
