import "./Category.scss";
import { useNavigate } from "react-router-dom";
// import Cat1 from "../../../assets/category/cat-1.jpg";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  //   if (categories) {
  //     console.log(categories.data);
  //   }
  return (
    <div className="shop-by-category">
      <div className="categories">
        {/* {categories &&
          categories.data.map((category) => {
            const { id } = category;
            // console.log(id)
            const url =
              process.env.REACT_APP_DEV_URL +
              category.attributes.img.data.attributes.url;
            // console.log(url)
            return (
              <div
                className="category"
                key={id}
                onClick={() => navigate(`/category/${id}`)}
              >
                <img src={url} alt="" />
              </div>
            );
          })} */}
        {categories?.data.map((category) => {
            const { id } = category;
            // console.log(id)
            const url =
              process.env.REACT_APP_DEV_URL +
              category.attributes.img.data.attributes.url;
            // console.log(url)
            return (
              <div
                className="category"
                key={id}
                onClick={() => navigate(`/catagory/${id}`)}
              >
                <img src={url} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Category;
