import "./Category.scss";
import Products from "../Products/Products";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
const Category = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/api/products?populate=*&[filters][catagories][id]=${id}`
  );
  const title = data?.data?.[0]?.attributes?.catagories?.data?.[0]?.attributes?.title
  console.log(title)
// if(data){}
  return (
    <div className="catagory-main-content">
      <div className="layout">
        <div className="catagory-title">
          {title}
          {/* Categoy Title */}
        </div>
        <Products innerPage={true} products={data} />
      </div>
    </div>
  );
};

export default Category;
