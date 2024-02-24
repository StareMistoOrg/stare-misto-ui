import styled from 'styled-components';

interface AuthFormWrapperProps {}

export const AuthFormWrapper = styled.section<AuthFormWrapperProps>`
  align-items: center;
  display: flex;
  height: calc(100vh - 453px);
  justify-content: center;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.size.maxwidth};

  @media ${({ theme }) => theme.media.medium} {
    height: calc(100vh - 467px);
  }
`;

interface AuthFormContainerProps {}

export const AuthFormContainer = styled.div<AuthFormContainerProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 450px;

  @media ${({ theme }) => theme.media.medium} {
    width: 100%;
    padding: ${({ theme }) => `0 ${theme.space.threeunits}`};
  }
`;
