import styled from 'styled-components';

interface FooterWrapperProps {}

export const FooterWrapper = styled.div<FooterWrapperProps>`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  height: auto;
  justify-content: center;
  width: 100%;

  background-color: ${({ theme }) => theme.color.black};
`;

interface FooterProps {}

export const Footer = styled.footer<FooterProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  padding: ${({ theme }) => `${theme.space.fourunits} ${theme.space.threeunits}`};
  max-width: ${({ theme }) => theme.size.maxwidth};
`;

interface FooterContainerProps {}

export const FooterContainer = styled.div<FooterContainerProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: ${({ theme }) => theme.space.oneandhalfunits};
  max-width: ${({ theme }) => theme.size.maxwidth};
`;

interface FooterHeadingProps {}

export const FooterHeading = styled.span<FooterHeadingProps>`
  font-size: 2em;
  font-weight: bold;

  color: ${({theme}) => theme.color.white};
`;

interface FooterSeparatorProps {}

export const FooterSeparator = styled.span<FooterSeparatorProps>`
  align-items: flex-start;
  border: 1px solid;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  height: 0px;
  margin-left: 0px;
  margin-right: 0px;
  width: 100%;

  border-color: ${({ theme }) => theme.color.gray800};
  margin: ${({ theme }) => `${theme.space.twounits} 0`};
`;

interface FooterContainer2Props {}

export const FooterContainer2 = styled.div<FooterContainer2Props>`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  justify-content: space-between;
  width: 100%;
`;

interface FooterTextProps {}

export const FooterText = styled.span<FooterTextProps>`
  color: ${({theme}) => theme.color.gray500};
`;

interface IconsWrapperProps {}

export const IconsWrapper = styled.div<IconsWrapperProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;