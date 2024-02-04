import styled from 'styled-components';

interface ButtonProps {}

export const Button = styled.button<ButtonProps>`
  border: none;
  font-size: 18px;
  transition: 0.3s;
  font-weight: bold;
  padding-left: 3rem;
  border-radius: 45px;
  padding: 1.5rem 3rem;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary300};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.primary500};
  }
`;

interface ButtonTextProps {}

export const ButtonText = styled.button<ButtonTextProps>`
  border: 1px solid;
  transition: 0.3s;
  font-weight: bold;
  font-size: 18px;
  border-color: transparent;
  background-color: transparent;

  color: ${({ theme }) => theme.color.white};
  border-radius: ${({theme}) => theme.radius.radius4};
  padding: ${({ theme }) => `${theme.space.unit} ${theme.space.twounits}`};

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) => theme.color.white};
  }
`;
