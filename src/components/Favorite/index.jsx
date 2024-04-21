import { Container } from 'components/CommonElements';
import VehicleCard from 'components/VehicleCard';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'reduxApp/root/rootSelector';

const Favorite = () => {
  const vans = useSelector(selectFavorite);

  return (
    <>
      <Container>
        <h3>Favorites</h3>
        {vans.map((van) => {
          return <VehicleCard key={van._id} info={van} />;
        })}
        {vans.length === 0 ? <p>no favorites added</p> : null}
      </Container>
    </>
  );
};

export default Favorite;
