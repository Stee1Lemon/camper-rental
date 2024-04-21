import { Container } from 'components/CommonElements';
import { NavLink } from 'react-router-dom';
import { NavContainer, NavField } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <NavContainer>
        <NavField>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </NavField>
      </NavContainer>
    </Container>
  );
};

export default Header;
