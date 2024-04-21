import styled from 'styled-components';

export const NavField = styled.nav`
  display: flex;
  gap: 50px;
  padding-top: 20px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid;

  a.active {
    color: var(--fourth-color);
  }
`;
