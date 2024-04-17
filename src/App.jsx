import AppWrapper from 'App.styled';
import SharedLayout from 'components/SharedLayout';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoritePage = lazy(() => import('pages/FavoritePage'));

const App = () => {
  return (
    <>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </AppWrapper>
    </>
  );
};

export default App;
