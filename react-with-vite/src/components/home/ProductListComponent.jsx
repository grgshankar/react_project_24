// import { useState } from "react";
import ProductsComponent from "../products/ProductsComponent";
import JacketImg from "../../assets/images/jacket.jpg";
import Sweater from "../../assets/images/sweater.jpg";
import MixSweater from "../../assets/images/mix_sweater.jpg"
import ChristmasSweater from "../../assets/images/christmas_sweater.png"
const ProductListComponent = ({SectionTitle}) => {
  const productList = [
    {
      id: 1,
      title: "Jacket",
      img: JacketImg,
      price: "1500",
      exPrice: "2000",
      altName: "jacket",
    },
    {
      id: 2,
      title: "Sweater",
      img: Sweater,
      price: "1500",
      exPrice: "2000",
      altName: "sweater",
    },
    {
      id: 3,
      title: "Mix Sweater",
      img: MixSweater,
      price: "2000",
      exPrice: "2500",
      altName: "mix_sweater",
    },
    {
      id: 4,
      title: "Christmas Sweater",
      img: ChristmasSweater,
      price: "1800",
      exPrice: "2200",
      altName: "christmas_sweater",
    },   
  ];
  return (
    <>
      <div className="product_list_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center m-5">
              <h2>{SectionTitle}</h2>
            </div>
            <div className="col-12">
              <div className="row">
                {productList.map((item, index) => {
                  return(
                     <ProductsComponent
                    key={index}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    exPrice={item.exPrice}
                    img={item.img}
                    alt={item.altName}
                  />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListComponent;
