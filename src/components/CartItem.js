import React, { PureComponent } from "react";
import "../styles.css";


class CartItem extends PureComponent {
  render() {
    const { title, price, id } = this.props;
    return (
      <div className="cart-item">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00$</p>
        <button onClick={()=>this.props.remove(id)}>X</button>
      </div>
    );
  }
}

export default CartItem;
