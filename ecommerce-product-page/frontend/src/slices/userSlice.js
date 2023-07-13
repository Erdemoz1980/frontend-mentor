import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../services/userService';

//Get user info from local storage
const userInfo = JSON.parse(localStorage.getItem('user'))

const initialState = {
  userInfo: userInfo ? userInfo : null,
  isLoading:false,
  errMessage:false
}

//Register user
export const register = createAsyncThunk('user/register', async (userData, thunkApi) => {
  try {
    return await userService.register(userData)
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})
 
//Login User
export const login = createAsyncThunk('user/login', async (userData, thunkApi) => {
  try {
    return await userService.login(userData)
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)

  }
})

//Update User info
export const updateUser = createAsyncThunk('user/update', async (userData, thunkApi) => {
  try {
    return await userService.update(userData)
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
    
  }
})


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoading =false
      state.userInfo = null
      state.errMessage = null
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
        state.userInfo = action.payload
        state.errMessage = null
        localStorage.setItem('user', JSON.stringify(action.payload))
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.errMessage = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.userInfo = action.payload
        state.errMessage = null
        localStorage.setItem('user', JSON.stringify(action.payload))
      })
      .addCase(login.rejected, (state, action) => {
        state.errMessage = action.payload
        state.user = null
      })
      .addCase(updateUser.pending, (state) => {
      state.isLoading = true
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.userInfo = action.payload
        state.errMessage = null
        localStorage.setItem('user', JSON.stringify(action.payload))
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false
        state.errMessage = action.payload
       })
  }
})

export const { logout } = userSlice.actions;
export default userSlice.reducer;