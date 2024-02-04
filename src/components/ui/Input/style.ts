import styled from 'styled-components';

interface InputContainerProps {}

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  width: inherit;
  margin-bottom: ${({ theme }) => theme.space.twounits};

  input:focus + label div,
  :not(input[value='']) + label div {
    background-color: white;
    font-size: 1.1rem;
    transform: translate(0, -170%);

    color: ${({ theme }) => theme.color.primary300};
  }

  :not(input:focus) + label div {
    color: ${({ theme }) => theme.color.gray800};
  }
`;

interface InputProps {}

export const Input = styled.input<InputProps>`
  font-size: 1.4rem;
  height: 5rem;
  width: inherit;
  border: 2px solid;
  border-radius: 1rem;

  padding: 0 ${({ theme }) => theme.space.oneandhalfunits};
  border-color: ${({ theme }) => theme.color.black};

  &:focus {
    outline: none;

    border-color: ${({ theme }) => theme.color.primary300};
  }
`;

interface LabelProps {}

export const Label = styled.label<LabelProps>`
  align-items: center;
  background-color: transparent;
  border: 3px solid transparent;
  bottom: 0;
  display: flex;
  font-size: 1.4rem;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;

  padding: 0 ${({ theme }) => theme.space.oneandhalfunits};
`;

interface LabelTextProp {}

export const LabelText = styled.div<LabelTextProp>`
  font-size: 1.4rem;
  background-color: transparent;
  transform: translate(0);
  transition: transform 0.15s ease-out, font-size 0.15s ease-out, background-color 0.2s ease-out, color 0.15s ease-out;

  padding: 0 ${({ theme }) => theme.space.halfunit};
`;

interface InputErrorProps {}

export const InputError = styled.div<InputErrorProps>`
  position: absolute;
  left: 10px;
`;

interface InputErrorTextProps {}

export const InputErrorText = styled.p<InputErrorTextProps>`
  color: ${({ theme }) => theme.color.error};
  font-size: 0.8rem;
  height: 2rem;
  padding: 0;
  margin: 0;
`;
