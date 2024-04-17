import { Container } from 'components/CommonElements';
import VehicleCard from 'components/VehicleCard';

const Catalog = () => {
  return (
    <Container>
      <h2>Catalog</h2>
      <form>
        <p>Location</p>
        <input type="text" placeholder="Kyiv, Ukraine" />
        <p>Filters</p>
        <p>Vehicle equipment</p>
        <div>
          <label>
            AC
            <input type="checkbox" />
          </label>
          <label>
            Automatic
            <input type="checkbox" />
          </label>
          <label>
            Kitchen
            <input type="checkbox" />
          </label>
          <label>
            TV
            <input type="checkbox" />
          </label>
          <label>
            Shower/WC
            <input type="checkbox" />
          </label>
        </div>
        <p>Vehicle type</p>
        <div>
          <label>
            Van
            <input type="checkbox" />
          </label>
          <label>
            Fully Integrated
            <input type="checkbox" />
          </label>
          <label>
            Alcove
            <input type="checkbox" />
          </label>
        </div>
        <button type="submit">Search</button>
      </form>
      <VehicleCard />
      <button>Load more</button>
    </Container>
  );
};

export default Catalog;
