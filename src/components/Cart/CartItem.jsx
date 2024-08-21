/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import "./CartItem.css";

const CartItem = (props) => {
  const { removeItem } = useContext(CartContext);
  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={props.product.img} alt={props.product.name}></img>
      </div>
      <div className="cart-item-info">
        <div className="cart-item-texts">
          <b>{props.product.name}</b>
          <div>
            <span>₺{props.product.price} X </span>
            <span className="cart-item-amount">{props.product.amount}</span>
          </div>
        </div>
        <a
          href="/"
          className="cart-item-remove"
          onClick={(e) => {
            e.preventDefault();
            removeItem(props.product.id);
          }}
        >
          X
        </a>
      </div>
    </li>
  );
};

export default CartItem;
