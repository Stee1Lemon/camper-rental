import Modal from 'components/Modal';
import VehicleInfo from 'components/VehicleInfor';
import { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { campervanSlice } from 'reduxApp/root/rootSlice';
import { selectFavorite } from 'reduxApp/root/rootSelector';

const VehicleCard = ({ info }) => {
  const [vehicleModal, setVehicleModal] = useState(false);
  const [isFavorite, setIsFavotite] = useState(false);
  const dispatch = useDispatch();
  const favoritVans = useSelector(selectFavorite);

  const handleFavorite = () => {
    dispatch(campervanSlice.actions.toggleFavorite(info));
    setIsFavotite(!isFavorite);
  };

  useEffect(() => {
    const result = favoritVans.some((van) => van._id === info._id);
    setIsFavotite(result);
  }, [favoritVans, info._id]);

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
              <p>€{info.price},00</p>
              <FavoriteButton
                isFavorite={isFavorite}
                onClick={handleFavorite}
              />
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
