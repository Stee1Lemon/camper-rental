import CloseButton from 'components/CommonElements/CloseButton';
import { Button, Input } from 'components/CommonElements';
import image from 'assets/icons.svg';
import Categories from 'components/CommonElements/Categories';
import { useDispatch } from 'react-redux';
import campervanApi from 'reduxApp/root/rootOperations';

const HomePage = () => {
  const dispatch = useDispatch();

  let currentPage = 1;
  const handleClick = async () => {
    const result = await dispatch(
      campervanApi.getCampervanThunk({ page: currentPage })
    );
    currentPage++;
    console.log(result);
  };
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
      <button onClick={handleClick}>mockapi</button>
    </>
  );
};

export default HomePage;
