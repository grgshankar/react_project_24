import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../layouts/HomePage";
import ProductPage from "../layouts/ProductPage";
import ProductDetails from "../layouts/ProductDetails";
import DashboardLayout from "../cms/DashboardLayout";
import HomeLayout from "../layouts/HomeLayout";
import Error404 from "../../components/common/Error404";
import LoginComponent from "../auth/LoginComponent";
import ForgotPage from "../auth/ForgotPage";
import RegisterPage from "../auth/RegisterPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import SetPasswordPage from "../auth/SetPasswordPage";
const Routings = () => {
  return (
    <>
      <ToastContainer />
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
            <Route path="login" element={<LoginComponent />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="active/:token" element={<SetPasswordPage />} />
            <Route path="forget-password" element={<ForgotPage />} />
          </Route>
          <Route path="/admin" element={<DashboardLayout />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routings;
