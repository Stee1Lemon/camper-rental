import styled from 'styled-components';

const CategoriesField = styled.div`
  display: flex;
  gap: 8px;
  box-sizing: border-box;
  width: fit-content;
  min-height: 44px;
  padding: 12px 18px;
  border-radius: 100px;
  background-color: var(--fifth-color);

  div {
    width: 20px;
    height: 20px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
  p {
    display: inline;
    margin: 0;
  }
`;

export default CategoriesField;
