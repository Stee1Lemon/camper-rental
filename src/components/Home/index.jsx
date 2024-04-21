import { Container } from 'components/CommonElements';
import { Description, Title } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <Title>Find your campervan</Title>
      <Description>
        That catalog of campervans may help you to find one that will be perfect
        for you in your nearest future. Please, have a look.
      </Description>
    </Container>
  );
};

export default Home;
