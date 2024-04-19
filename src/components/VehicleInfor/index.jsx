import BookCampervanForm from 'components/BookCampervanForm';
import Features from 'components/Fearures';
import Reviews from 'components/Reviews';
import {
  Container,
  Description,
  ImagesContainer,
  NameAndClose,
  Price,
  ReviewsAndLocationModal,
  TogglerFeaturesReviews,
} from './VehicleInfo.styled';
import CloseButton from 'components/CloseButton';
import { Svg } from 'components/VehicleCard/VehicleCard.styled';
import image from 'assets/icons.svg';
import { useState } from 'react';

const VehicleInfo = ({ onClose }) => {
  const [additionalInfo, setAdditionalInfo] = useState('features');

  const handleChange = (e) => {
    setAdditionalInfo(e.target.value);
  };

  return (
    <Container>
      <NameAndClose>
        <h3>Mavericks</h3>
        <CloseButton onClose={onClose} />
      </NameAndClose>
      <div>
        <ReviewsAndLocationModal>
          <div>
            <Svg>
              <svg>
                <use href={`${image}#icon-star`} />
              </svg>
            </Svg>
            <p>4.4(2 Reviews)</p>
          </div>
          <div>
            <Svg>
              <svg>
                <use href={`${image}#icon-location`} />
              </svg>
            </Svg>
            <p>Kyive, Ukraine</p>
          </div>
        </ReviewsAndLocationModal>
        <Price>€8000.00</Price>
      </div>
      <ImagesContainer>
        <div>
          <img src="" alt="some img" />
        </div>
        <div>
          <img src="" alt="some img" />
        </div>
        <div>
          <img src="" alt="some img" />
        </div>
      </ImagesContainer>
      <Description>
        Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptate magnam commodi ratione, similique error placeat nobis natus
        voluptates facilis fugit? Libero modi amet laudantium vel voluptatem
        dignissimos nobis veniam dolore?
      </Description>
      <TogglerFeaturesReviews>
        <label>
          <input
            type="radio"
            name="additional-info"
            value={'features'}
            onChange={handleChange}
            checked={additionalInfo === 'features'}
          />
          Features
        </label>
        <label>
          <input
            type="radio"
            name="additional-info"
            value={'reviews'}
            onChange={handleChange}
            checked={additionalInfo === 'reviews'}
          />
          Reviews
        </label>
      </TogglerFeaturesReviews>
      <div>
        {additionalInfo === 'features' && <Features />}
        {additionalInfo === 'reviews' && <Reviews />}
        <BookCampervanForm />
      </div>
    </Container>
  );
};

export default VehicleInfo;
