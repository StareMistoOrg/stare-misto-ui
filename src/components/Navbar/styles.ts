import styled from 'styled-components';

interface DesktopMenuWrapperProps {}

export const DesktopMenuWrapper = styled.div<DesktopMenuWrapperProps>`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

interface HomeLinksProps {
  $flexDirection?: string;
}

export const HomeLinks = styled.nav<HomeLinksProps>`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;

  flex-direction: ${({ $flexDirection }) => $flexDirection || 'row'};
`;

interface HomeLinkProps {
  color?: string;
  hovercolor?: string;
}

export const HomeLink = styled.a<HomeLinkProps>`
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s;
  text-decoration: none;

  color: ${({ color }) => color};
  margin-left: ${({ theme }) => theme.space.twounits};

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
