import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  width: 430px;
`;
export const Review = styled.div`
  margin-bottom: 24px;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;

  p {
    font-family: 600;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const Rate = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  p {
    font-weight: 400;
    font-size: 16px;
  }
`;
