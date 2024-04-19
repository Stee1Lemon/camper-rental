import CloseButtonStyled from './CloseButton.styled';
import icons from 'assets/icons.svg';

const CloseButton = ({ onClose }) => {
  return (
    <CloseButtonStyled onClick={onClose}>
      <svg>
        <use href={`${icons}#icon-close`}></use>
      </svg>
    </CloseButtonStyled>
  );
};

export default CloseButton;
