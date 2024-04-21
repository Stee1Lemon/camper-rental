import { Container } from 'components/CommonElements';
import { NavLink } from 'react-router-dom';
import { NavField } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <NavField>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </NavField>
    </Container>
  );
};

export default Header;
