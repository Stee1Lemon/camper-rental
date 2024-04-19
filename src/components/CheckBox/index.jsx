import { CheckInput, CheckLabel, Image } from './CheckBox.styled';
import image from 'assets/icons.svg';

const CheckBoxInput = ({ checked, name, value, icon, onChange }) => {
  // const [checked, setChecked] = useState(false);

  const handleChange = () => {
    // setChecked(!checked);
    onChange(checked);
  };

  return (
    <>
      <CheckInput
        type="checkbox"
        checked={checked}
        name={name}
        value={value}
        onChange={onChange}
      />
      <CheckLabel onClick={handleChange}>
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
