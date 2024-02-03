import styled from 'styled-components';

interface SidebarStyledProps {
  open: boolean;
}

export const SidebarStyled = styled.nav<SidebarStyledProps>`
  display: none;

  @media ${({ theme }) => theme.media.medium} {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    right: 0;
    padding: 2rem;
    position: absolute;
    top: 0;
    transition: transform 0.3s ease-in-out;

    background: ${({ theme }) => theme.color.white};
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  }

  a {
    margin-left: 0;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.color.primary100};
    text-decoration: none;
    transition: color 0.3s linear;
  }
`;
