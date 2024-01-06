import { PropTypes } from "prop-types";
const StockShow = ({title, subTitle, discount, img, altName, season, product}) => {
  return (
    <>
    <div className="main_stock_section">
        <div className="stock_section">
            <div className="container">
                <div className="content_wrapper">
                    <div className="left_content d-flex flex-column justify-content-center">
                        <span className="category_six"></span>
                        <h2>{title}</h2>
                        <p>{subTitle}</p>
                        <p><span>Sale {discount}</span>off Everything</p>
                    </div>
                    <div className="center_img">
                        <div className="img_wrap">
                            <img src={img} alt={altName} />
                        </div>
                    </div>
                    <div className="right_content">
                        <span>{season}</span>
                        <h2>{product}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};

StockShow.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    altName: PropTypes.string,
    discount: PropTypes.string.isRequired,
    season: PropTypes.string.isRequired,
    product: PropTypes.string.isRequired,

}

export default StockShow