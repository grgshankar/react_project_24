import { NavLink } from "react-router-dom";
const FooterComponent = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col col-xl-4">
              <div className="company_profile">
                <NavLink to="#">MultiShop</NavLink>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur expedita debitis neque temporibus doloremque, minus
                  ullam ab numquam iusto iure illo distinctio dolorum laboriosam
                  accusantium, blanditiis voluptates. Incidunt, omnis voluptas!
                </p>
              </div>
            </div>
            <div className="col col-xl-4">
              <div className="foot_menu">
                <strong className="sub_fot_title">Menu</strong>
                <ul>
                  <li>
                    <NavLink to="index.html">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="products.html">Products</NavLink>
                  </li>
                  <li>
                    <NavLink to="trending.html">Trendings</NavLink>
                  </li>
                  <li>
                    <NavLink to="contact.html">Contact us</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-xl-4">
              <div className="social_connect">
                <div className="foot_top_connect">
                  <strong className="sub_fot_title">Connect</strong>
                  <h3>
                    <NavLink to="#">+977 9849778601</NavLink>
                  </h3>
                  <p>
                    <NavLink to="mailto:shankargurung027@gmail.com">
                      shankargurung027@gmail.com
                    </NavLink>
                  </p>
                  <p>Dhading Bensi, Nepal</p>
                </div>
                <ul>
                  <li>
                    <NavLink to="https://www.facebook.com/romi.gurung"
                      target="_blank">
                      <i className="fa-brands fa-facebook"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.linkedin.com/in/shankar-gurung-91227b144/"
                      target="_blank">
                      <i className="fa-brands fa-linkedin"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_footer text-center">
          <p>Copyright © 2024</p>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
