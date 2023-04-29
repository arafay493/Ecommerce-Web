import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ innerPage, headingText, products }) => {
  // if (products) {
  //   console.log(products);
  // }
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {/* {products && products.data.map((product) => {
          const { id } = product;
          return <Product key={id} id  ={id} data = {product.attributes} />;
        })} */}
        {products?.data.map((product) => {
          const { id } = product;
          return <Product key={id} id = {id} data = {product.attributes} />;
        })}
      </div>
    </div>
  );
};

export default Products;
