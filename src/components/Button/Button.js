import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 220px;
  height: 47px;
  background-color: yellow;
  border: none;
  border-radius: 50px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;

  ${({ secondary }) =>
    secondary &&
    css`
      width: 110px;
      height: 30px;
      background-color: lightgray;
    `}
`;

export default Button;
