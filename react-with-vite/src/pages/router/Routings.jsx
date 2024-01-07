import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../layouts/HomePage";
import ProductPage from "../layouts/ProductPage";
import ProductDetails from "../layouts/ProductDetails";
import DashboardLayout from "../cms/DashboardLayout";
import HomeLayout from "../layouts/HomeLayout";

const Routings = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/product_details/:id">
              <Route
                index
                element={
                  <>
                    <ProductPage />
                    <Outlet />
                  </>
                }
              />
              <Route path=":id" element={<ProductDetails />} />
            </Route>
          </Route>
          <Route path="/admin" element={<DashboardLayout />} />
            
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routings;
