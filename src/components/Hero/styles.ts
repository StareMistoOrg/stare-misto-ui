import styled from 'styled-components';

interface HeroWrapperProps {}

export const HeroWrapper = styled.section<HeroWrapperProps>`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  height: auto;
  justify-content: center;
  width: 100%;

  background-color: ${({ theme }) => theme.color.primary100};
`;

interface HeroWrapper1Props {}

export const HeroWrapper1 = styled.div<HeroWrapper1Props>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: auto;
  width: 100%;

  max-width: ${({ theme }) => theme.size.maxwidth};
  padding: ${({ theme }) => `${theme.space.sixunits} ${theme.space.threeunits}`};
`;

interface HeroWrapper2Props {}

export const HeroWrapper2 = styled.div<HeroWrapper2Props>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: ${({ theme }) => theme.space.twounits};
`;

interface HeroHeadingProps {}

export const HeroHeading = styled.h2<HeroHeadingProps>`
  font-size: 4.5rem;
  line-height: 1.6;
  max-width: 800px;
  text-align: center;

  color: ${({ theme }) => theme.color.white};
`;

interface HeroSubHeadingProps {}

export const HeroSubHeading = styled.span<HeroSubHeadingProps>`
  font-size: 32px;
  line-height: 1.6;
  text-align: center;

  color: ${({ theme }) => theme.color.white};
`;
