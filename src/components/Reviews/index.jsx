import {
  Image,
  Rate,
  Review,
  ReviewsContainer,
  UserInfo,
} from './Reviews.styled';
import Svg from 'components/CommonElements/Svg';

const Reviews = () => {
  return (
    <ReviewsContainer>
      <Review>
        <UserInfo>
          <Image>
            <img src="" alt="some" />
          </Image>
          <div>
            <p>Name</p>
            <Rate>
              {/* <Svg>
                <svg>
                  <use href={`${images}#icon-star`} />
                </svg>
              </Svg> */}
              <Svg icon="star" width="16px" height="16px" />
              <p>3</p>
            </Rate>
          </div>
        </UserInfo>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sed
          illum. Commodi dolores officia iure debitis asperiores, cumque ut,
          tenetur magnam temporibus mollitia eaque modi exercitationem veniam
          esse, sit accusantium!
        </p>
      </Review>
      <Review>
        <UserInfo>
          <Image>
            <img src="" alt="some" />
          </Image>
          <div>
            <p>Name</p>
            <Rate>
              <Svg icon="star" width="16px" height="16px" />
              <p>3</p>
            </Rate>
          </div>
        </UserInfo>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sed
          illum. Commodi dolores officia iure debitis asperiores, cumque ut,
          tenetur magnam temporibus mollitia eaque modi exercitationem veniam
          esse, sit accusantium!
        </p>
      </Review>
    </ReviewsContainer>
  );
};

export default Reviews;
