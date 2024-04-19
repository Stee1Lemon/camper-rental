import CloseButton from 'components/CloseButton';
import { Button, Input } from 'components/CommonElements';
import image from 'assets/icons.svg';
import Categories from 'components/Categories';

const HomePage = () => {
  return (
    <>
      <h2>Home page</h2>
      <Button>Search</Button>
      <Input placeholder="Name" />

      <p>tut</p>
      <CloseButton />
      <button>
        <svg>
          <use xlinkHref={`${image}#icon-kitchen`} />
        </svg>
      </button>
      <Categories icon={'kitchen'} category={'kitchen'} />
      <Categories icon={'toilet'} category={'toilet'} />
      <Categories icon={'microwave'} category={'microwave'} />
      <Categories icon={'tv'} category={'tv'} />
      <Categories icon={'water'} category={'water'} />
    </>
  );
};

export default HomePage;
