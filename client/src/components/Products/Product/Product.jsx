import {useNavigate} from 'react-router-dom'
import "./Product.scss";
// import Prod from "../../../assets/products/earbuds-prod-1.webp";
const Product = ({ id, data }) => {
    // console.log(data.img.data[0].attributes.url)
  const navigate = useNavigate()
  const imageUrl = process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url;
  const {title , price} = data
  return (
    <div className="product-card" onClick={() => navigate(`/product/${id}`)}>
      <div className="thumbnail">
        <img src={imageUrl} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">
          {title}
        </span>
        <span className="price">&#8360; {price}</span>
      </div>
    </div>
  );
};

export default Product;
