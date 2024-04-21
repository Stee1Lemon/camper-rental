import { Rate, Review, ReviewsContainer, UserInfo } from './Reviews.styled';
import Svg from 'components/CommonElements/Svg';

const Reviews = ({ info }) => {
  return (
    <ReviewsContainer>
      {info.reviews.map((review) => (
        <Review>
          <UserInfo>
            <Svg icon="avatar" width="60px" height="60px" />
            <div>
              <p>{review.reviewer_name}</p>
              <Rate>
                <Svg icon="star" width="16px" height="16px" />
                <p>{review.reviewer_rating}</p>
              </Rate>
            </div>
          </UserInfo>
          <p>{review.comment}</p>
        </Review>
      ))}
    </ReviewsContainer>
  );
};

export default Reviews;
