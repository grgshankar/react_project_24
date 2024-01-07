import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductDetails = () => {
  return (
    <>
    <div className="mainWrapper">
        <div className="container">
            <div className="row products_details mt-5 mb-5">
                <div className="col col-sm-12 col-lg-4">
                    <div className="img_wrap">
                        <img src="./assets/images/baby_shoes.jpg" alt="Shoes" />
                    </div>
                </div>
                <div className="col col-sm-12 col-lg-8">
                    <div className="right_details">
                        <h1>Baby Shoes</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid minus cum nesciunt
                            voluptates recusandae odio</p>
                        <p className="price_">Rs.1200</p>
                        <form>
                            <div className="size_ mb-3">
                                <button>S</button>
                                <button className="active">M</button>
                                <button>L</button>
                                <button>XL</button>
                            </div>
                            <div className="quantity_">
                                <input type="number" value="1" min="1" className="w-100" />
                            </div>
                            <div className="btn_wrap mt-3">
                                <button type="submit" className="btn btn-success">Add to Cart</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="row product_list_wrapper">
                <div className="col col-sm-12 mt-2 mb-2">
                    <h1>Related Products</h1>
                </div>
                <div className="col col-sm-12 col-xl-4 mb-4">
                    <div className="card">
                        <div className="img_wrap">
                            <NavLink to={`product_details/${id}`}><img src="./assets/images/mix_sweater.jpg" alt="mix sweater" /></NavLink>
                        </div>
                        <div className="hover_icon">
                            <NavLink to="#" className="icon_ wishlist"><i className="fa-regular fa-heart"></i></NavLink>
                            <NavLink to="#" className="icon_ cart_"><i className="fa-solid fa-cart-shopping"></i></NavLink>
                        </div>
                        <div className="content_wrap p-3">
                            <strong className="prod_name d-block text-center"><NavLink to={`product_details/${id}`}>Mix
                                    Sweater</NavLink></strong>
                            <div className="d-flex flex-row justify-content-center">
                                <span className="price_tag me-2">Rs. 1500</span>
                                <span className="price_tag price_s"><s>Rs. 2000</s></span>
                            </div>
                            <div className="btn_wrap text-center m-2">
                                <NavLink to="cart.html" className="btn btn-success">Add to Cart</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-sm-12 col-xl-4 mb-4">
                    <div className="card">
                        <div className="img_wrap">
                            <NavLink to={`product_details/${id}`}><img src="./assets/images/christmas_sweater.png"
                                    alt="christmas_sweater" /></NavLink>
                        </div>
                        <div className="hover_icon">
                            <NavLink to="#" className="icon_ wishlist"><i className="fa-regular fa-heart"></i></NavLink>
                            <NavLink to="#" className="icon_ cart_"><i className="fa-solid fa-cart-shopping"></i></NavLink>
                        </div>
                        <div className="content_wrap p-3">
                            <strong className="prod_name d-block text-center"><NavLink to={`product_details/${id}`}>Baby Winter
                                    Shoes</NavLink></strong>
                            <div className="d-flex flex-row justify-content-center">
                                <span className="price_tag me-2">Rs. 1200</span>
                                <span className="price_tag price_s"><s>Rs. 1500</s></span>
                            </div>
                            <div className="btn_wrap text-center m-2">
                                <NavLink to="cart.html" className="btn btn-success">Add to Cart</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-sm-12 col-xl-4 mb-4">
                    <div className="card">
                        <div className="img_wrap">
                            <NavLink to={`product_details/${id}`}><img src="./assets/images/jacket.jpg" alt="jacket" /></NavLink>
                        </div>
                        <div className="hover_icon">
                            <NavLink to="#" className="icon_ wishlist"><i className="fa-regular fa-heart"></i></NavLink>
                            <NavLink to="#" className="icon_ cart_"><i className="fa-solid fa-cart-shopping"></i></NavLink>
                        </div>
                        <div className="content_wrap p-3">
                            <strong className="prod_name d-block text-center"><NavLink to={`product_details/${id}`}>Jacket</NavLink></strong>
                            <div className="d-flex flex-row justify-content-center">
                                <span className="price_tag me-2">Rs. 1500</span>
                                <span className="price_tag price_s"><s>Rs. 2000</s></span>
                            </div>
                            <div className="btn_wrap text-center m-2">
                                <NavLink to="cart.html" className="btn btn-success">Add to Cart</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetails