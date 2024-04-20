import Categories from 'components/CommonElements/Categories';
import {
  Details,
  DetailsList,
  FeaturesBlock,
  FeaturesContainer,
} from './Features.styled';

const Features = ({ info }) => {
  return (
    <FeaturesContainer>
      <FeaturesBlock>
        {Object.entries(info.details).map(([key, value]) => (
          <Categories
            icon={key}
            category={`${value > 1 ? value : ''} ${key}`}
          />
        ))}
      </FeaturesBlock>
      <Details>Vehicle details</Details>
      <DetailsList>
        <li>
          <p>Form</p>
          <p>{info.form}</p>
        </li>
        <li>
          <p>Length</p>
          <p>{info.length}</p>
        </li>
        <li>
          <p>Width</p>
          <p>{info.width}</p>
        </li>
        <li>
          <p>Height</p>
          <p>{info.height}</p>
        </li>
        <li>
          <p>Tank</p>
          <p>{info.tank}</p>
        </li>
        <li>
          <p>Consumption</p>
          <p>{info.consumption}</p>
        </li>
      </DetailsList>
    </FeaturesContainer>
  );
};

export default Features;
