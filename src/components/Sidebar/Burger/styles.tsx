import styled from 'styled-components';

interface StyledBurgerProps {
  open: boolean;
}
export const StyledBurger = styled.button<StyledBurgerProps>`
  display: none;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => (open ? theme.color.secondary : theme.color.primary100)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

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
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 2rem;
    justify-content: space-around;
    padding: 0;
    width: 2rem;
  }
`;
