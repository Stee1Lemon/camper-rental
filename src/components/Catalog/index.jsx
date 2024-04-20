import { Container } from 'components/CommonElements';
import VehicleCard from 'components/VehicleCard';
import CatalogFilter from 'components/CatalogFilter';
import { CatalogField, VehicleCardsField } from './Catalog.styled';
import { useDispatch, useSelector } from 'react-redux';
import campervanApi from 'reduxApp/root/rootOperations';
import { selectCampervan } from 'reduxApp/root/rootSelector';
import { useEffect } from 'react';

const Catalog = () => {
  const dispatch = useDispatch();
  let currentPage = 1;
  const vans = useSelector(selectCampervan);

  const handleClick = async () => {
    currentPage++;
    const result = await dispatch(
      campervanApi.getCampervanThunk({ page: currentPage })
    );

    console.log(result);
  };

  useEffect(() => {
    dispatch(campervanApi.getCampervanThunk({ page: 1 }));
  }, [dispatch]);

  return (
    <Container>
      <h2>Catalog</h2>
      <CatalogField>
        <CatalogFilter />
        <VehicleCardsField>
          {vans.map((van) => {
            return <VehicleCard key={van._id} info={van} />;
          })}
        </VehicleCardsField>
      </CatalogField>
      <button onClick={handleClick}>Load more</button>
    </Container>
  );
};

export default Catalog;
