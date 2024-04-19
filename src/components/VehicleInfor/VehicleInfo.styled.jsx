import { ReviewsAndLocation } from 'components/VehicleCard/VehicleCard.styled';
import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  width: 982px;
  max-height: 720px;
  height: auto;
  padding: 40px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const NameAndClose = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
    color: var(--first-color);
  }
`;

export const ReviewsAndLocationModal = styled(ReviewsAndLocation)`
  margin-bottom: 16px;
`;

export const Price = styled.p`
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: var(--first-color);
`;

export const ImagesContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;

  div {
    min-width: 290px;
    max-width: 290px;
    min-height: 310px;
    max-height: 310px;
  }
`;

export const Description = styled.p`
  margin-bottom: 44px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

export const TogglerFeaturesReviews = styled.div`
  width: 902px;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid var(--border-color);

  input {
    appearance: none;
  }

  label {
    margin-right: 40px;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    color: var(--first-color);
  }
`;
