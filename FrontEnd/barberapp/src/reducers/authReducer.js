import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../helpers/axios"
import tokenAuth from "../helpers/tokenAuth"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


export const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await Axios('auth/login', {
        method: 'POST', data: {
          email: userData.email,
          password: userData.password
        }
      })
      localStorage.setItem('token', response.data.token );
      const Toast = MySwal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Ingreso Exitoso'
      })
      return (response.data)
    } catch (error) {
      const Toast = MySwal.mixin({
        toast: true,
        position:'center',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'error',
        title: error.response.data.msg
      })
      return rejectWithValue(error.response.data.msg)
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await Axios('auth/register', {
        method: 'POST', data: {
          name: userData.name,
          email: userData.email,
          number: userData.number,
          password: userData.password
        }
      })
      const Toast = MySwal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: response.data.message
      })
      return (response.data)
    } catch (error) {
      console.log(error.response.data)
      const Toast = MySwal.mixin({
        toast: true,
        position:'center',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'error',
        title: error.response.data.msg
      })
      return rejectWithValue(error.response.data.msg)
    }
  }
);

export const tokenValidate = createAsyncThunk(
  "auth/token",
  async (userData, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token)
    }

    try {
      const response = await Axios("auth/renew");
      console.log(response)
      return (response.data)
    } catch (error) {
      return rejectWithValue(error.response.data.msg)
    }
  }
);


const initialState = {
    user:{},
    dates: {},
    loading: false,
    error: null,
    isAuth:null,
    message:null,
    token:localStorage.getItem('token')
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogout: (state, action) => {
      state.user = {};
      localStorage.removeItem('token');
      state.isAuth = null;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      return{...state, loading: true}
    },
    [login.fulfilled]: (state, { payload }) => {
      return { ...state, user: payload, loading: false,  isAuth: true, token: payload.token  };
    },
    [login.rejected]: (state, { payload }) => {
      console.log("Rejected!");
      return { ...state, error: payload, loading: false, };
    },
    [register.pending]: (state) => {
      return{...state, loading: true}
    },
    [register.fulfilled]: (state, { payload }) => {
      console.log(payload.message)
      return { ...state, user: payload, loading: false,  isAuth: true, message:payload.message};
    },
    [register.rejected]: (state, { payload }) => {
      console.log("Rejected!");
      return { ...state, error: payload, loading: false, };
    },
    [tokenValidate.pending]: (state) => {
      return{...state, loading: true}
    },
    [tokenValidate.fulfilled]: (state, { payload }) => {
  
      return { ...state, user: payload, loading: false,  isAuth: true, message:payload.msg};
    },
    [tokenValidate.rejected]: (state, { payload }) => {
  
      return { ...state, error: payload, loading: false, };
    },
  },
})

// Action creators are generated for each case reducer function
export const {authLogout } =  authSlice.actions

export default  authSlice.reducer