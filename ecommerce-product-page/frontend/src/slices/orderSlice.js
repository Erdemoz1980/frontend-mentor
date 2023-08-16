import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import orderService from '../services/orderService';

const initialState = {
  isLoading: false,
  isSuccess: false,
  order:{},
  errMessage:''
}

//Create Order
export const createOrder = createAsyncThunk('order/createOrder', async (orderData, thunkAPI) => {
  try {
    return await orderService.createOrder(orderData)
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
        state.errMessage = null
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.order = action.payload
        state.errMessage = null
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.order = {}
        state.errMessage = action.payload
      })
  }
});

export const { reset } = orderSlice.actions;
export default orderSlice.reducer;


