import BookCampervanForm from 'components/BookCampervanForm';
import Features from 'components/Fearures';
import Reviews from 'components/Reviews';
import {
  AdditionalInfoField,
  Container,
  Description,
  ImagesContainer,
  NameAndClose,
  Price,
  ReviewsAndLocationModal,
  TogglerFeaturesReviews,
} from './VehicleInfo.styled';
import CloseButton from 'components/CommonElements/CloseButton';
import { useState } from 'react';
import Svg from 'components/CommonElements/Svg';
import { Image } from 'components/VehicleCard/VehicleCard.styled';

const VehicleInfo = ({ onClose, info }) => {
  const [additionalInfo, setAdditionalInfo] = useState('features');

  const handleChange = (e) => {
    setAdditionalInfo(e.target.value);
  };

  return (
    <Container>
      <NameAndClose>
        <h3>{info.name}</h3>
        <CloseButton onClose={onClose} />
      </NameAndClose>
      <div>
        <ReviewsAndLocationModal>
          <div>
            <Svg icon="star" width="16px" height="16px" />
            <p>
              {info.rating}({info.reviews.length} Reviews)
            </p>
          </div>
          <div>
            <Svg icon="location" width="16px" height="16px" />
            <p>{info.location}</p>
          </div>
        </ReviewsAndLocationModal>
        <Price>€{info.price},00</Price>
      </div>
      <ImagesContainer>
        {info.gallery.map((img) => (
          <Image>
            <img src={img} alt="vehicle" />
          </Image>
        ))}
      </ImagesContainer>
      <Description>{info.description}</Description>
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
      <AdditionalInfoField>
        {additionalInfo === 'features' && <Features info={info} />}
        {additionalInfo === 'reviews' && <Reviews info={info} />}
        <BookCampervanForm />
      </AdditionalInfoField>
    </Container>
  );
};

export default VehicleInfo;
