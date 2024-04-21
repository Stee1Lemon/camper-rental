import CheckBoxInput from 'components/CheckBox';
import {
  CheckBoxField,
  FilterNameField,
  FilterType,
  LocationInput,
  SearchButton,
} from './CatalogFilter.styled';
import { useState } from 'react';

const equipment = [
  { name: 'equipment', value: 'AC', icon: 'ac', checked: false },
  { name: 'equipment', value: 'Automatic', icon: 'automatic', checked: false },
  { name: 'equipment', value: 'Kitchen', icon: 'kitchen', checked: false },
  { name: 'equipment', value: 'TV', icon: 'TV', checked: false },
  { name: 'equipment', value: 'Shower/WC', icon: 'shower', checked: false },
];

const vehicleType = [
  { name: 'vehicle-type', value: 'Van', icon: 'van', checked: false },
  {
    name: 'vehicle-type',
    value: 'Fully Integrated',
    icon: 'fully-integrated',
    checked: false,
  },
  { name: 'vehicle-type', value: 'Alcove', icon: 'alcove', checked: false },
];

const CatalogFilter = () => {
  const [location, setLocation] = useState('');
  const [equipmentOptions, setEquipmentOptions] = useState(equipment);
  const [vehicleTypeOptions, setVehicleTypeOptions] = useState(vehicleType);

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkedEquipmentOptions = equipmentOptions.filter(
      (option) => option.checked
    );
    const checkedVehicleTypeOptions = equipmentOptions.filter(
      (option) => option.checked
    );
    console.log(checkedEquipmentOptions);
    console.log(checkedVehicleTypeOptions);
  };

  const handleChangeEquipment = (value) => {
    setEquipmentOptions((prevEquipmentOptions) =>
      prevEquipmentOptions.map((option) =>
        option.value === value
          ? { ...option, checked: !option.checked }
          : option
      )
    );
  };

  const handleChangeVehicleType = (value) => {
    setVehicleTypeOptions((prevEquipmentOptions) =>
      prevEquipmentOptions.map((option) =>
        option.value === value
          ? { ...option, checked: !option.checked }
          : option
      )
    );
  };

  return (
    <form>
      <FilterNameField>Location</FilterNameField>
      <LocationInput
        type="text"
        placeholder="Kyiv, Ukraine"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <FilterNameField>Filters</FilterNameField>
      <FilterType>Vehicle equipment</FilterType>
      <CheckBoxField>
        {equipmentOptions.map((item) => (
          <CheckBoxInput
            name={item.name}
            value={item.value}
            icon={item.icon}
            checked={item.checked}
            onChange={() => handleChangeEquipment(item.value)}
          />
        ))}
      </CheckBoxField>
      <FilterType>Vehicle type</FilterType>
      <CheckBoxField>
        {vehicleTypeOptions.map((item) => (
          <CheckBoxInput
            name={item.name}
            value={item.value}
            icon={item.icon}
            checked={item.checked}
            onChange={() => handleChangeVehicleType(item.value)}
          />
        ))}
      </CheckBoxField>
      <SearchButton type="submit" onClick={handleSubmit}>
        Search
      </SearchButton>
    </form>
  );
};

export default CatalogFilter;
