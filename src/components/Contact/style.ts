import styled from 'styled-components';

interface ContactWrapperProps {}

export const ContactWrapper = styled.section<ContactWrapperProps>`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  height: auto;
  justify-content: center;
  width: 100%;

  background-color: ${({ theme }) => theme.color.white};
`;

interface ContactWrapper1Props {}

export const ContactWrapper1 = styled.div<ContactWrapper1Props>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: auto;
  width: 100%;

  padding: ${({ theme }) => `${theme.space.sixunits} ${theme.space.threeunits}`};
  max-width: ${({ theme }) => theme.size.maxwidth};
`;

interface ControlsWrapperProps {}

export const ControlsWrapper = styled.div<ControlsWrapperProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: ${({ theme }) => theme.space.twounits};

  @media ${({ theme }) => theme.media.medium} {
    gap: 0;
    grid-template-columns: 1fr;
  }
`;

export const Controls = styled.div`
  width: 100%;
`;

export const TextArea = styled.textarea`
  border-radius: 1rem;
  border: 2px solid;
  font-size: 1.4rem;
  height: auto;
  min-height: 15rem;
  resize: none;
  width: inherit;

  border-color: ${({ theme }) => theme.color.black};
  margin-bottom: ${({ theme }) => theme.space.twounits};
  padding: ${({ theme }) => theme.space.oneandhalfunits};

  &:focus {
    outline: none;

    border-color: ${({ theme }) => theme.color.primary300};
  }
`;
