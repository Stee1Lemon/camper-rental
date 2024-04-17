import BookCampervanForm from 'components/BookCampervanForm';
import Features from 'components/Fearures';
import Reviews from 'components/Reviews';

const VehicleInfo = () => {
  return (
    <>
      <div>
        <h3>Mavericks</h3>
        <div>svg close</div>
      </div>
      <div>
        <p>star svg</p> <p>4.4(2 Reviews)</p>
        <p>Kyive, Ukraine</p>
        <p>€8000.00</p>
      </div>
      <div>3 images</div>
      <p>Description</p>
      <div>
        <Features />
        <Reviews />
        <BookCampervanForm />
      </div>
    </>
  );
};

export default VehicleInfo;
