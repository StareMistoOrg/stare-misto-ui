import styled from 'styled-components';

interface HeaderWrapperProps {}

export const HeaderWrapper = styled.div<HeaderWrapperProps>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: ${({ theme }) => `${theme.space.oneandhalfunits} 0`};
  background-color: ${({ theme }) => theme.color.primary100};
`;

interface HeaderProps {
  $borderRadius: string;
  $ZIndex?: number;
  position?: string;
  top?: string | number;
  width: string;
}

export const Header = styled.header<HeaderProps>`
  align-items: center;
  display: flex;
  justify-content: space-between;
  transition: all 0.2s ease-in;

  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  max-width: ${({ theme }) => theme.size.maxwidth};
  padding: ${({ theme }) => `0 ${theme.space.threeunits}`};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  width: ${({ width }) => width};
  z-index: ${({ $ZIndex }) => $ZIndex};
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

interface BurgerMenuProps {}

export const BurgerMenu = styled.span<BurgerMenuProps>`
  display: none;
  font-size: 36px;
  color: ${({ theme }) => theme.color.primary100};
  cursor: pointer;

  @media ${({ theme }) => theme.media.medium} {
    display: block;
  }
`;
