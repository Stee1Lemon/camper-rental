import { Container } from 'components/CommonElements';
import VehicleCard from 'components/VehicleCard';
import CatalogFilter from 'components/CatalogFilter';
import {
  CatalogField,
  LoadMoreButton,
  VehicleCardsField,
} from './Catalog.styled';
import { useDispatch, useSelector } from 'react-redux';
import campervanApi from 'reduxApp/root/rootOperations';
import { selectCampervan } from 'reduxApp/root/rootSelector';
import { useEffect, useState } from 'react';

let currentPage = 1;

const Catalog = () => {
  const [loadMoreButton, setLoadMoreButton] = useState(true);
  const dispatch = useDispatch();

  const vans = useSelector(selectCampervan);

  const handleClick = async () => {
    currentPage++;
    const { payload } = await dispatch(
      campervanApi.getCampervanThunk({ page: currentPage })
    );
    if (payload.length < 4) setLoadMoreButton(false);
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
      {loadMoreButton ? (
        <LoadMoreButton onClick={handleClick}>Load more</LoadMoreButton>
      ) : null}
    </Container>
  );
};

export default Catalog;
