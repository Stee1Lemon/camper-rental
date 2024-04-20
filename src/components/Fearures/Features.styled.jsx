import styled from 'styled-components';

export const FeaturesContainer = styled.div`
  width: 430px;
`;

export const FeaturesBlock = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  width: 430px;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 44px;
`;

export const Details = styled.p`
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: var(--first-color);
`;

export const DetailsList = styled.ul`
  width: 430px;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);

  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  p {
    font-size: 18px;
    line-height: 1.33;
    color: var(--first-color);
  }
`;
