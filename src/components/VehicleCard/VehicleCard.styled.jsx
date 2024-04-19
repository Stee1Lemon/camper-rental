import CloseButtonStyled from 'components/CommonElements/CloseButton/CloseButton.styled';
import styled from 'styled-components';

export const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 24px;
  width: 888px;
  height: 358px;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
`;

export const Image = styled.div`
  min-width: 290px;
  max-width: 290px;
  min-height: 310px;
  max-height: 310px;
`;

export const NameAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
    color: var(--first-color);
  }

  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
  }
`;

export const FavoriteButton = styled(CloseButtonStyled)``;

export const ReviewsAndLocation = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;

  p {
    margin-left: 4px;
    display: inline-block;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
  }
`;

// export const Svg = styled.div`
//   display: inline-block;
//   border: none;
//   background-color: transparent;
//   svg {
//     width: 16px;
//     height: 16px;
//   }
// `;

export const Description = styled.div`
  width: 526px;
  margin-bottom: 24px;

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const Equipment = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;
