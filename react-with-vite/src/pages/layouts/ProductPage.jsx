import FilterComponent from "../../components/filter";
import ProductListComponent from "../../components/home/ProductListComponent";
const ProductPage = () => {
  const filterChecbox = [
    {
      id: "all_cat",
      name: "all_cat",
      forName: "all_cat",
      label: "All",
    },
    {
      id: "baby_cat",
      name: "baby_cat",
      forName: "baby_cat",
      label: "All",
    },
    {
      id: "women_cat",
      name: "women_cat",
      forName: "women_cat",
      label: "Women Wear",
    },
    {
      id: "men_cat",
      name: "men_cat",
      forName: "men_cat",
      label: "Men's Wear",
    },
    {
      id: "other_cat",
      name: "other_cat",
      forName: "other_cat",
      label: "Others",
    },
  ];
  return (
    <>
      <div className="mainWrapper">
        <div className="container">
          <div className="row">
            <div className="col col-sm-12 col-xl-3">
              <h3 className="mt-4 mb-4">Category</h3>
              <div className="cat_wrapper">
                <form>
                  <ul className="list-unstyled">
                    {filterChecbox.map((box, index) => {
                      return (
                        <>
                          <FilterComponent
                            key={index}
                            id={box.id}
                            name={box.name}
                            forName={box.forName}
                            label={box.label}
                          />
                        </>
                      );
                    })}
                  </ul>
                </form>
              </div>
            </div>
            <div className="col col-sm-12 col-xl-9">
              <div className="row mt-4 mb-4">
                <div className="col col-sm-12 col-md-6">
                  <h2>All Products</h2>
                </div>
                <div className="col col-sm-12 col-md-6 d-md-flex flex-md-row justify-content-end">
                  <div className="select_wrapper d-flex flex-column justify-content-center">
                    <select>
                      <option disabled="disabled" selected="selected">
                        Sorting
                      </option>
                      <option value="baby_shop">Baby Wears</option>
                      <option value="Ladies_shop">Ladies Wears</option>
                      <option value="Men_shop">Men's Wears</option>
                    </select>
                  </div>
                </div>
              </div>
              <ProductListComponent  className="row"/>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ProductPage;
