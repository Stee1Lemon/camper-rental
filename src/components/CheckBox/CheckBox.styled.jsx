import styled from 'styled-components';

export const CheckInput = styled.input`
  appearance: none;
`;

export const CheckLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  min-width: 95px;
  max-width: 120px;
  height: 95px;
  padding: 17px 17px;
  border-radius: 10px;
  border: 1px solid var(--border-color);

  cursor: pointer;

  ${CheckInput}:checked + & {
    border: 2px solid var(--third-color);
  }
`;

export const Image = styled.div`
  width: 32px;
  height: 32px;

  svg {
    width: 32px;
    height: 32px;
  }
`;
