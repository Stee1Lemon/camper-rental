import image from 'assets/icons.svg';
import { SvgContainer } from './Svg.styled';

const Svg = ({ icon, width = '20px', height = '20px' }) => {
  return (
    <SvgContainer $width={width} $height={height}>
      <svg>
        <use href={`${image}#icon-${icon}`} />
      </svg>
    </SvgContainer>
  );
};

export default Svg;
