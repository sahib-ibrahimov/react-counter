import React, { PureComponent } from "react";
import "../styles.css";
import GoodsItem from './GoodsItem';
import { connect } from "react-redux";
import {addToCart} from "../actions";

const mapStateToProps = store => {
  return {
    goods: store.goods
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  };
};

class Goods extends PureComponent {
  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {this.props.goods.map(item => (
           <ul className="goods__list" key={item.id}>
             <li className="goods__list-item">
               <GoodsItem {...item} add={this.props.addToCart} />
             </li>
           </ul>)
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Goods);
