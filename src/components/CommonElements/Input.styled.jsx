import styled from 'styled-components';

const Input = styled.input`
  font-weight: 400;
  color: var(--first-color);

  border-radius: 10px;
  padding: 18px;
  width: 400px;
  height: 58px;
  box-sizing: border-box;
  background: var(--sixth-color);
  border: none;

  &::placeholder {
    color: var(--placeholder-color);
  }
  &:focus {
    outline: none;
  }
`;

export default Input;
