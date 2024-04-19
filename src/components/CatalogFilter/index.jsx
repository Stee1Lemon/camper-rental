import CheckBoxInput from 'components/CheckBox';
import {
  CheckBoxField,
  FilterNameField,
  FilterType,
  LocationInput,
  SearchButton,
} from './CatalogFilter.styled';

const CatalogFilter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <form>
      <FilterNameField>Location</FilterNameField>
      <LocationInput type="text" placeholder="Kyiv, Ukraine" />
      <FilterNameField>Filters</FilterNameField>
      <FilterType>Vehicle equipment</FilterType>
      <CheckBoxField>
        <CheckBoxInput
          name={'equipment'}
          value={'AC'}
          icon={'ac'}
          onChange={handleChange}
        />
        <CheckBoxInput
          name={'equipment'}
          value={'Automatic'}
          icon={'automatic'}
        />
        <CheckBoxInput
          name={'equipment'}
          value={'Kitchen'}
          icon={'kitchen'}
          onChange={handleChange}
        />
        <CheckBoxInput
          name={'equipment'}
          value={'TV'}
          icon={'tv'}
          onChange={handleChange}
        />
        <CheckBoxInput
          name={'equipment'}
          value={'Shower/WC'}
          icon={'shower'}
          onChange={handleChange}
        />
      </CheckBoxField>
      <FilterType>Vehicle type</FilterType>
      <CheckBoxField>
        <CheckBoxInput
          name={'vehicle-type'}
          value={'Van'}
          icon={'van'}
          onChange={handleChange}
        />
        <CheckBoxInput
          name={'vehicle-type'}
          value={'Fully Integrated'}
          icon={'fully-integrated'}
          onChange={handleChange}
        />
        <CheckBoxInput
          name={'vehicle-type'}
          value={'Alcove'}
          icon={'alcove'}
          onChange={handleChange}
        />
      </CheckBoxField>
      <SearchButton type="submit" onClick={handleSubmit}>
        Search
      </SearchButton>
    </form>
  );
};

export default CatalogFilter;
