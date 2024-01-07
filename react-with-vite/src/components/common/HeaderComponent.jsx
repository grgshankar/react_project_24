import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const HeaderComponent = () =>{
    const topBarSubmit = (e) => {
        e.preventDefault();
    }
    return(<>
    <header className="sticky-top">
        <nav className="navbar navbar-expand-lg bg-body-tertiary pt-3 pb-3">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={"/"}>MultiShop</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex flex-row justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="products.html">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="trending.html">Trending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact us</a>
                        </li>
                    </ul>
                </div>
                <Form onSubmit={topBarSubmit} className="d-flex me-3 search_bar" role="search">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                </Form>
                <div className="d-flex align-items-center head_icon">
                    <ul className="list-unstyled  m-0">
                        <li><a href="wishlist.html"><i className="fa-regular fa-heart"></i><span
                                    className="pro_count wishlist_count">2</span></a></li>
                        <li><a href="cart.html"><i className="fa-solid fa-cart-shopping"></i><span
                                    className="pro_count cart_count">4</span></a></li>
                        <li><a href="register.html"><i className="fa-solid fa-user-plus"></i></a></li>
                        <li><a href="logout.html"><i className="fa-solid fa-arrow-right-to-bracket"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </>)
}
export default HeaderComponent;