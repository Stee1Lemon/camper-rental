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

const VehicleCard = () => {
  const [vehicleModal, setVehicleModal] = useState(false);

  return (
    <>
      <Card>
        <Image>
          <img src="" alt="test vehicle" />
        </Image>
        <div>
          <NameAndPrice>
            <h3>Mavericks</h3>
            <div>
              <p>€8000.00</p>
              <FavoriteButton isFavorite={false} />
            </div>
          </NameAndPrice>
          <ReviewsAndLocation>
            <div>
              <Svg icon="star" width="16px" height="16px" />
              <p>4.4(2 Reviews)</p>
            </div>
            <div>
              <Svg icon="location" width="16px" height="16px" />
              <p>Kyive, Ukraine</p>
            </div>
          </ReviewsAndLocation>
          <Description>
            <p>
              Description Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Similique, asperiores! Culpa, doloremque beatae
              exercitationem dolore neque iure accusantium obcaecati
              consectetur?
            </p>
          </Description>

          <Equipment>
            <Categories icon={'adults'} category={'2 adults'} />
            <Categories icon={'automatic'} category={'automatic'} />
            <Categories icon={'petrol'} category={'petrol'} />
            <Categories icon={'petrol'} category={'petrol'} />
            <Categories icon={'petrol'} category={'petrol'} />
            <Categories icon={'petrol'} category={'petrol'} />
          </Equipment>
          <Button onClick={() => setVehicleModal(!vehicleModal)}>
            Show more
          </Button>
          <Modal
            isOpen={vehicleModal}
            onClose={() => setVehicleModal(!vehicleModal)}
          >
            <VehicleInfo onClose={() => setVehicleModal(!vehicleModal)} />
          </Modal>
        </div>
      </Card>
    </>
  );
};

export default VehicleCard;
