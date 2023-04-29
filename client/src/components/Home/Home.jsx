import { useEffect, useContext } from "react";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import { Context } from "../../utils/context";
import "./Home.scss";
import { fetchDataFromApi } from "../../utils/api";
const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/catagories?populate=*").then((res) => {
      // console.log(res)
      setCategories(res);
    });
  };

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      // console.log(res);
      setProducts(res);
    });
  };

  return (
    <div className="home">
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products headingText="Popular Products" products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
