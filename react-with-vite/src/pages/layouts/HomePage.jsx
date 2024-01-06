import BannerSliderComponent from "../../components/home/BannerSliderComponent";
import ProductListComponent from "../../components/home/ProductListComponent";
import StockShow from "../../components/home/StockShow";
import ChristmasSweater from "../../assets/images/christmas_sweater.png";

const HomePage = () => {
  return (
    <>
      <BannerSliderComponent />
      <ProductListComponent SectionTitle={"Products"}/>
      <StockShow
        title={"Casual"}
        subTitle={"Stock clearance Sale"}
        discount={"30%"}
        img={ChristmasSweater}
        altName={"christmas_sweater"}
        season={"Winter"}
        product={"Sweater"}
      />
      <ProductListComponent SectionTitle={"Trending Products"}/>
    </>
  );
};
export default HomePage;
