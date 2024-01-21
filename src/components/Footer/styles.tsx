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
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  padding: ${({ theme }) => `${theme.space.fourunits} ${theme.space.threeunits}`};
  max-width: ${({ theme }) => theme.size.maxwidth};
`;

interface FooterContainerProps {}

export const FooterContainer = styled.div<FooterContainerProps>`
  display: flex;
  align-items: center;
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
  flex: 0 0 auto;
  width: 100%;
  height: 0px;
  display: flex;
  align-items: flex-start;
  margin-left: 0px;
  border-style: solid;
  border-width: 1px;
  margin-right: 0px;
  flex-direction: row;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;

  border-color: ${({ theme }) => theme.color.gray800};
  margin: ${({ theme }) => `${theme.space.twounits} 0`};
`;

interface FooterContainer2Props {}

export const FooterContainer2 = styled.div<FooterContainer2Props>`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

interface FooterTextProps {}

export const FooterText = styled.span<FooterTextProps>`
  color: ${({theme}) => theme.color.gray500};
`;

interface IconsWrapperProps {}

export const IconsWrapper = styled.div<IconsWrapperProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;