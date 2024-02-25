import styled from 'styled-components';

interface HeaderWrapperProps {}

export const HeaderWrapper = styled.div<HeaderWrapperProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: ${({ theme }) => `${theme.space.oneandhalfunits}`} 0;
  background-color: ${({ theme }) => theme.color.primary100};
`;

interface HeaderProps {
  $borderRadius: string;
  $maxWidth?: string;
  $ZIndex?: number;
  position?: string;
  top?: string;
  width: string;
}

export const Header = styled.header<HeaderProps>`
  transition: all 0.2s ease-in;
  z-index: 9;

  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  max-width: ${({ $maxWidth }) => $maxWidth};
  padding: ${({ theme }) => `0 ${theme.space.threeunits}`};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  width: ${({ width }) => width};
  z-index: ${({ $ZIndex }) => $ZIndex};
`;

interface HeaderContainerProps {}

export const HeaderContainer = styled.div<HeaderContainerProps>`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;

  max-width: ${({ theme }) => theme.size.maxwidth};
`;
interface LogoProps {}

export const Logo = styled.img<LogoProps>`
  cursor: pointer;

  width: ${({ theme }) => theme.size.medium};
  border-radius: ${({ theme }) => theme.radius.round};
`;

interface NavWrapperProps {}

export const NavWrapper = styled.div<NavWrapperProps>`
  width: 100%;

  @media ${({ theme }) => theme.media.medium} {
    display: none;
  }
`;
