import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../layouts/HomePage";
import HeaderComponent from "../../components/common/HeaderComponent";
import FooterComponent from "../../components/home/FooterComponent";
import ProductDetails from "../layouts/ProductDetails";

const Routings = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product_details" element={<ProductDetails />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
};
export default Routings;
