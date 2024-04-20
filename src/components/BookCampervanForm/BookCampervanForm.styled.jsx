import styled from 'styled-components';

export const FormField = styled.form`
  box-sizing: border-box;
  width: 448px;
  height: 532px;
  padding: 24px;
  border: 1px solid var(--border-color);
  border-radius: 10px;

  h3 {
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    color: var(--first-color);
  }

  p {
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: var(--second-color);
  }
`;

export const InputsField = styled.div`
  position: relative;
  margin-bottom: 24px;
  display: flex;
  gap: 14px;
  flex-direction: column;
`;

export const CommentInput = styled.textarea`
  font-weight: 400;
  color: var(--first-color);

  border-radius: 10px;
  padding: 18px;
  width: 400px;
  height: 114px;
  box-sizing: border-box;
  background: var(--sixth-color);
  border: none;
  overflow-y: auto;
  overflow-x: hidden;
  resize: none;

  &::placeholder {
    color: var(--placeholder-color);
  }
  &:focus {
    outline: none;
  }
`;

export const Message = styled.span`
  position: absolute;
  font-weight: 400;
  font-size: 14px;
  color: var(--third-color);
  bottom: 5px;
  right: 5px;
`;
