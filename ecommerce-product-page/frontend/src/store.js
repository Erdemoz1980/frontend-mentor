import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import productReducer from './slices/productSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product:productReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true
});

export default store;