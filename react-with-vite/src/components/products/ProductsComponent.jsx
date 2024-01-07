import { NavLink, useParams } from "react-router-dom";

const ProductsComponent = ({ img, altName, title, price, exPrice }) => {
    const id = useParams();
    console.log(id);
  return (
    <>
      <div className="col col-sm-12 col-xl-4 mb-4">
        <div className="card">
          <div className="img_wrap">
            <NavLink to={`/product_details/${id}`}>
              <img src={img} alt={altName} />
            </NavLink>
          </div>
          <div className="hover_icon">
            <NavLink to="#" className="icon_ wishlist">
              <i className="fa-regular fa-heart"></i>
            </NavLink>
            <NavLink to="cart.html" className="icon_ cart_">
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </div>
          <div className="content_wrap p-3">
            <strong className="prod_name d-block text-center">
              <NavLink to={`/product_details/${id}`}>{title}</NavLink>
            </strong>
            <div className="d-flex flex-row justify-content-center">
              <span className="price_tag me-2">Rs.{price}</span>
              <span className="price_tag price_s">
                <s>{exPrice}</s>
              </span>
            </div>
            <div className="btn_wrap text-center m-2">
              <NavLink to="cart.html" className="btn btn-success">
                Add to Cart
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductsComponent;
