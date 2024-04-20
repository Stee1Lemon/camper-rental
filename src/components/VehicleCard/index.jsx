import Modal from 'components/Modal';
import VehicleInfo from 'components/VehicleInfor';
import { useState } from 'react';
import {
  Card,
  Description,
  Equipment,
  Image,
  NameAndPrice,
  ReviewsAndLocation,
} from './VehicleCard.styled';
import FavoriteButton from 'components/CommonElements/FavoriteButton';
import { Button } from 'components/CommonElements';
import Categories from 'components/CommonElements/Categories';
import Svg from 'components/CommonElements/Svg';

const VehicleCard = ({ info }) => {
  const [vehicleModal, setVehicleModal] = useState(false);

  return (
    <>
      <Card>
        <Image>
          <img src={info.gallery[0]} alt="vehicle" />
        </Image>
        <div>
          <NameAndPrice>
            <h3>{info.name}</h3>
            <div>
              <p>€{info.price}.00</p>
              <FavoriteButton isFavorite={false} />
            </div>
          </NameAndPrice>
          <ReviewsAndLocation>
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
          </ReviewsAndLocation>
          <Description>
            <p>{info.description}</p>
          </Description>

          <Equipment>
            {Object.entries(info.details).map(([key, value]) => (
              <Categories
                icon={key}
                category={`${value > 1 ? value : ''} ${key}`}
              />
            ))}
          </Equipment>
          <Button onClick={() => setVehicleModal(!vehicleModal)}>
            Show more
          </Button>
          <Modal
            isOpen={vehicleModal}
            onClose={() => setVehicleModal(!vehicleModal)}
          >
            <VehicleInfo
              onClose={() => setVehicleModal(!vehicleModal)}
              info={info}
            />
          </Modal>
        </div>
      </Card>
    </>
  );
};

export default VehicleCard;
