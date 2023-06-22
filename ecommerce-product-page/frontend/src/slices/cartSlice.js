import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isCartOpen: false,
    cartItems: []
  },
  reducers: {
    setCartIsOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload
    }
  }
});

export const { setCartIsOpen, setCartItems } = cartSlice.actions;
export default cartSlice.reducer;