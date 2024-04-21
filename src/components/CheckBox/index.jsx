import { CheckInput, CheckLabel, Image } from './CheckBox.styled';
import image from 'assets/icons.svg';

const CheckBoxInput = ({ name, value, icon, onChange }) => {
  return (
    <>
      <CheckInput
        type="checkbox"
        id={value}
        name={name}
        value={value}
        onChange={onChange}
      />
      <CheckLabel htmlFor={value}>
        <Image>
          <svg>
            <use xlinkHref={`${image}#icon-${icon}`} />
          </svg>
        </Image>
        {value}
      </CheckLabel>
    </>
  );
};

export default CheckBoxInput;
