const initialState = {
    items: [],
    totalAmount: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const updatedItems = [...state.items, action.payload];
        const updatedTotalAmount = updatedItems.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        );
        return {
          ...state,
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
  
      case 'REMOVE_FROM_CART':
        const filteredItems = state.items.filter(
          (item) => item.product.id !== action.payload
        );
        const newTotalAmount = filteredItems.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        );
        return {
          ...state,
          items: filteredItems,
          totalAmount: newTotalAmount,
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  