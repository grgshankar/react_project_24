import { PropTypes } from "prop-types";

const SliderComponent = ({ img, altName, title, subTitle }) => {
  return (
    <>
      <img src={img} className="d-block w-100" alt={altName} />
      <div className="carousel-caption d-none d-md-block">
        <h5>{title}</h5>
        <p>{subTitle}</p>
      </div>
    </>
  );
};
SliderComponent.propTypes = {
  img: PropTypes.string.isRequired,
  altName: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default SliderComponent;
