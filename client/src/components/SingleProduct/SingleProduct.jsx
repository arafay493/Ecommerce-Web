import { useParams } from "react-router-dom";
import "./SingleProduct.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
// import prod from "../../assets/products/earbuds-prod-1.webp";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useFetch } from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { Context } from "../../utils/context";

const SingleProduct = () => {
  const [quantiy, setQuantiy] = useState(1);

  const { handleAddToCart } = useContext(Context);

  const decrement = () => {
    if (quantiy === 1) return;
    setQuantiy((prevState) => prevState - 1);
  };

  const increment = () => {
    setQuantiy((prevState) => prevState + 1);
  };

  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&filters[id]=${id}`);

  if (!data) return;
  // const imgUrl = process.env.REACT_APP_DEV_URL + data?.data?.[0]?.attributes?.img?.data?.[0]?.attributes?.url
  const imgUrl =
    process.env.REACT_APP_DEV_URL +
    data.data[0].attributes.img.data[0].attributes.url;
  const { title, price, description } = data.data[0].attributes;
  const catTitle = data.data[0].attributes.catagories.data[0].attributes.title;
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={imgUrl} alt="" />
          </div>
          <div className="right">
            <span className="name">{title}</span>
            <span className="price">&#8360; {price}</span>
            <span className="desc">{description}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantiy}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data.data[0], quantiy);
                  setQuantiy(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider"></span>
            <div className="info-item">
              <span className="text-bold">
                Catagory : <span>{catTitle}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={data.data[0].attributes.catagories.data[0].id}
        />
        {/* <RelatedProducts /> */}
      </div>
    </div>
  );
};

export default SingleProduct;
