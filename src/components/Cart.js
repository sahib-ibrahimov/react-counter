import React, { PureComponent } from "react";
import "../styles.css";
import CartItem from './CartItem';
import { connect } from "react-redux";
import {removeFromCart} from "../actions";

const mapStateToProps = store => {
  return {
    cart: store.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id))
  };
};

class Cart extends PureComponent {
  getTotal() {
    const { cart } = this.props;
    return cart.reduce((acc, item) => acc + item.price, 0);
  }
  render() {
    return (
      <div className="cart">
        <h2 className="cart__title" >Shopping Cart</h2>
        { this.props.cart.length ?
          <ul className="cart__list">
            {this.props.cart.map((item, index) => (
              <li className="cart__list-item" key={index}>
                <CartItem {...item} remove={this.props.removeFromCart} />
              </li>
            ))}
          </ul>
        :
          <p className="cart__note">Nothing in the cart now</p>
        }

        <p className="cart__total">Total: {this.getTotal()}.00$</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
