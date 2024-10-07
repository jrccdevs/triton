export const addToCart = (product, quantity) => (dispatch) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { product, quantity },
    });
  };
  
  export const removeFromCart = (productId) => (dispatch) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: productId,
    });
  };