import styled from 'styled-components';

interface DesktopMenuWrapperProps {}

export const DesktopMenuWrapper = styled.div<DesktopMenuWrapperProps>`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

interface HomeLinksProps {}

export const HomeLinks = styled.nav<HomeLinksProps>`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

interface HomeLinkProps {
  color: string;
  hovercolor: string;
}

export const HomeLink = styled.a<HomeLinkProps>`
  transition: all 0.3s;
  margin-left: ${({ theme }) => theme.space.twounits};
  color: ${({ color }) => color};

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;

    color: ${({ hovercolor }) => hovercolor};
  }

  &.active {
    font-weight: bold;
  }
`;
