import FavoriteButtonStyled from './FavoriteButton.styled';
import icons from 'assets/icons.svg';

const FavoriteButton = ({ isFavorite }) => {
  return (
    <FavoriteButtonStyled>
      <svg>
        <use
          href={
            isFavorite ? `${icons}#icon-favorite` : `${icons}#icon-no-favorite`
          }
        ></use>
      </svg>
    </FavoriteButtonStyled>
  );
};

export default FavoriteButton;
