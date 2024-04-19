import { Button, Input } from 'components/CommonElements';
import styled from 'styled-components';

export const FilterNameField = styled.p`
  line-height: 1.5;
  box-sizing: border-box;
  margin: 0;
  color: var(--second-color);
`;

export const LocationInput = styled(Input)`
  margin-top: 8px;
  margin-bottom: 32px;
`;

export const FilterType = styled.p`
  margin-top: 14px;
  margin-bottom: 24px;

  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: var(--first-color);
`;

export const CheckBoxField = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 24px;
  max-width: 360px;
  border-top: 1px solid var(--second-color);
`;

export const SearchButton = styled(Button)`
  margin-top: 64px;
`;
