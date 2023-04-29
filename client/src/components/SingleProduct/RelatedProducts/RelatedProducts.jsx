import React from "react";
import Products from "../../Products/Products";
import { useFetch } from "../../../hooks/useFetch";
const RelatedProducts = ({ productId, categoryId }) => {
  const { data } = useFetch(
    `/api/products?populate=*&filters[id][$ne]=${productId}&filters[catagories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
  );
  if (!data) return;
  // console.log(data);
  return (
    <div className="related-products">
      <Products headingText="Related Products" products = {data}/>
    </div>
  );
};

export default RelatedProducts;
