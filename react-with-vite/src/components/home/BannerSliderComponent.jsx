import JacketImage from "../../assets/images/jacket.jpg";
import SweaterImage from "../../assets/images/sweater.jpg";
import BabyShoes from "../../assets/images/baby_shoes.jpg";
import SliderComponent from "../sliders/SliderComponent";
import { useState } from "react";
const BannerSliderComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (index) => {
    setActiveIndex(index);
  }
  const sliderItems = [
    {
      title: "Ladies Long Coat",
      subTitle: "Most demanded in Winter",
      img: JacketImage,
      altName: "jackets",
    },
    {
      title: "Winter Sweater",
      subTitle: "Customer Satisfaction",
      img: SweaterImage,
      altName: "win_sweater",
    },
    {
      title: "Baby Shoes",
      subTitle: "Save baby from Winter",
      img: BabyShoes,
      altName: "Baby Shoes",
    },
  ];
  return (
    <>
      <div className="banner_wrapper">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {sliderItems.map((item, index) => {
              return (
                <>
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to={index}
                    className={index === activeIndex ? "active" : ""}
                    onClick={()=> handleSlideChange(index)}
                    aria-label={`Slide ${index}+1`}
                  ></button>
                </>
              );
            })}
          </div>
          <div className="carousel-inner">
            {sliderItems.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className={`carousel-item ${
                      index === activeIndex ? "active" : ""
                    }`}
                  >
                    <SliderComponent
                      title={item.title}
                      subTitle={item.subTitle}
                      img={item.img}
                      altName={item.altName}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default BannerSliderComponent;
