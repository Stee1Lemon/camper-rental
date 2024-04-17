import Modal from 'components/Modal';
import VehicleInfo from 'components/VehicleInfor';
import { useState } from 'react';

const VehicleCard = () => {
  const [vehicleModal, setVehicleModal] = useState(false);

  return (
    <>
      <div style={{ border: '1px solid black' }}>
        <div>
          <img src="" alt="test vehicle" />
        </div>
        <h3>Mavericks</h3>
        <p>€8000.00</p>
        <div>
          <p>favorite svg</p>
        </div>
        <div>
          <p>star svg</p>
        </div>
        <p>4.4(2 Reviews)</p>
        <p>Kyive, Ukraine</p>
        <p>
          Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Similique, asperiores! Culpa, doloremque beatae exercitationem dolore
          neque iure accusantium obcaecati consectetur?
        </p>
        <div>
          <p>equipment</p>
        </div>
        <button onClick={() => setVehicleModal(!vehicleModal)}>
          Show more
        </button>
        <Modal
          isOpen={vehicleModal}
          onClose={() => setVehicleModal(!vehicleModal)}
        >
          <VehicleInfo />
        </Modal>
      </div>
    </>
  );
};

export default VehicleCard;
