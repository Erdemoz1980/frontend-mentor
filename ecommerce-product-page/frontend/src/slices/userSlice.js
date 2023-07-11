import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../services/userService';

//Get user info from local storage
const userInfo = JSON.parse(localStorage.getItem('user'))

const initialState = {
  userInfo: userInfo ? userInfo : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message:null
}

//Register user
export const register = createAsyncThunk('user/register', async (userData, thunkApi) => {
  try {
    return await userService.registerUser(userData)
  } catch (error) {
    const message = (error.response && error.response.data.message) || error.message || error.toString()
    return thunkApi.rejectWithValue(message);
  }
}); 

//Login User
export const login = createAsyncThunk('user/login', async (loginData, thunkApi) => {
  try {
    return await userService.loginUser(loginData)
  } catch (error) {
    const message = (error.response && error.response.data.message) || error.message || error.toString()
    return thunkApi.rejectWithValue(message);
  }
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = null
      localStorage.removeItem('user')
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.userInfo = action.payload
        state.message = null
        localStorage.setItem('user', JSON.stringify(action.payload))
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.userInfo = action.payload
        state.message = null
        localStorage.setItem('user', JSON.stringify(action.payload))
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
        state.user = null
    })
  }
})

export const { logout } = userSlice.actions;
export default userSlice.reducer;