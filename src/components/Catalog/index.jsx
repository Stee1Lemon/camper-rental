import { Container } from 'components/CommonElements';
import VehicleCard from 'components/VehicleCard';
import CatalogFilter from 'components/CatalogFilter';
import { CatalogField } from './Catalog.styled';

const Catalog = () => {
  return (
    <Container>
      <h2>Catalog</h2>
      <CatalogField>
        <CatalogFilter />
        <VehicleCard />
      </CatalogField>
      <button>Load more</button>
    </Container>
  );
};

export default Catalog;
