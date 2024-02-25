import { motion } from 'framer-motion';
import styled from 'styled-components';

interface SidebarStyledProps {}

export const SidebarStyled = styled(motion.nav)<SidebarStyledProps>`
  display: none;

  @media ${({ theme }) => theme.media.medium} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px 48px 0px;
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: 10;

    background: ${({ theme }) => theme.color.white};
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

interface SidebarActionWrapperProps {}

export const SidebarActionWrapper = styled.div<SidebarActionWrapperProps>`
  display: flex;
  justify-content: end;
`;
