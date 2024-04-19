import Categories from 'components/Categories';
import {
  Details,
  DetailsList,
  FeaturesBlock,
  FeaturesContainer,
} from './Features.styled';

const Features = () => {
  return (
    <FeaturesContainer>
      <FeaturesBlock>
        <Categories icon={'adults'} category={'2 adults'} />
        <Categories icon={'automatic'} category={'Automatic'} />
        <Categories icon={'ac'} category={'AC'} />
        <Categories icon={'petrol'} category={'Petrol'} />
        <Categories icon={'bad'} category={'1 beds'} />
        <Categories icon={'automatic'} category={'Automatic'} />
      </FeaturesBlock>
      <Details>Vehicle details</Details>
      <DetailsList>
        <li>
          <p>Form</p>
          <p>Panel truck</p>
        </li>
        <li>
          <p>Length</p>
          <p>5.4 m</p>
        </li>
        <li>
          <p>Width</p>
          <p>2.01 m</p>
        </li>
        <li>
          <p>Height</p>
          <p>2.05 m</p>
        </li>
        <li>
          <p>Tank</p>
          <p>132</p>
        </li>
        <li>
          <p>Consumption</p>
          <p>12.41/100km</p>
        </li>
      </DetailsList>
    </FeaturesContainer>
  );
};

export default Features;
