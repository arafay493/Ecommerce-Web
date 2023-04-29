import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useContext } from "react";
import { Context } from "../../../utils/context";
const CartItem = () => {
  // const context = useContext(Context)
  // console.log(context)
  const { cartItems, handleCartProductQuantity , handleRemoveFromCart } =
    useContext(Context);
  return (
    <div className="cart-products">
      {cartItems.map((item) => {
        if(!item) return
        const {id} = item
        const url = process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url
        const {title , price , quantity} = item.attributes
        // console.log(title , price , quantity)
        // console.log(item)
        return (
          <div className="cart-product" key={id}>
            <div className="img-container">
              <img src={url} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">
                {title}
              </span>
              <MdClose className="close-btn" onClick={() => handleRemoveFromCart(item)}/>
              <div className="quantity-buttons">
                <span onClick={() => handleCartProductQuantity('dec' , item)}>-</span>
                <span>{quantity}</span>
                <span onClick={() => handleCartProductQuantity('inc' , item)}>+</span>
              </div>
              <div className="text">
                <span>{quantity}</span>
                <span>x</span>
                <span className="highlight">&#8360; {price * quantity}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
