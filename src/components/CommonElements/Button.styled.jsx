import styled from 'styled-components';

const Button = styled.button`
  color: var(--white-color);

  background: var(--third-color);
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;
  border: none;

  &:hover {
    background: var(--button-hover);
  }
`;

export default Button;
