import styled from 'styled-components';

interface SidebarStyledProps {
  open: boolean;
}

export const SidebarStyled = styled.nav<SidebarStyledProps>`
  display: none;

  @media ${({ theme }) => theme.media.medium} {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    padding: 2rem;
    position: absolute;
    right: 0;
    top: 0;
    transition: transform 0.3s ease-in-out;
    width: 100%;

    background: ${({ theme }) => theme.color.white};
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  }

  a {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    margin-left: 0;
    padding: 2rem 0;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s linear;

    color: ${({ theme }) => theme.color.primary100};
  }
`;
