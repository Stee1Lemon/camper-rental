import styled from 'styled-components';

export const SvgContainer = styled.div`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  border: none;
  background-color: transparent;
  svg {
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
  }
`;
