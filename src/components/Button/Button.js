import styled from 'styled-components';

const Button = styled.button`
  width: ${({ secondary }) => (secondary ? '110px' : '220px')};
  height: ${({ secondary }) => (secondary ? '30px' : '47px')};
  background-color: ${({ secondary }) => (secondary ? 'gray' : 'yellow')};
  border: none;
  border-radius: 50px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
`;

export default Button;
