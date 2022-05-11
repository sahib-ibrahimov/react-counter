export function addToCart(id) {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id: id
    }
  };
}

export function removeFromCart(id) {
  return {
    type: 'REMOVE_FROM_CART',
    payload: {
      index: id
    }
  };
}
