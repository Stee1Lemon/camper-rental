import image from 'assets/icons.svg';
import CategoriesField from './Categories.styled';

const Categories = ({ icon, category }) => {
  return (
    <CategoriesField>
      <div>
        <svg>
          <use xlinkHref={`${image}#icon-${icon}`} />
        </svg>
      </div>
      <p>{category}</p>
    </CategoriesField>
  );
};

export default Categories;
