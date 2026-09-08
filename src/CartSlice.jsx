import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload
      const product = state.items.find(item => item.name === name)
      if (product) {
        product.quantity += 1
      } else {
        state.items.push({name, image, cost, quantity: 1})
      }
      
    },
    removeItem: (state, action) => {
      const { name } = action.payload
      const product = state.items.find(item => item.name === name)
      if (product && product.quantity > 0) {
        product.quantity -= 1
      } 
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload
      const product = state.items.find(item => item.name === name)
      if (product) {
        product.quantity = quantity
      } 
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
