import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../helpers/axios"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import tokenAuth from "../helpers/tokenAuth"

const MySwal = withReactContent(Swal)

export const newDate = createAsyncThunk(
  "date/new",
  async (userData, { rejectWithValue }) => {
    
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token)
    }
   
    try {
      const response = await Axios('date/newDate', {
        method: 'POST', data: {
          title: userData.servicio,
          start: userData.date,
          worker: userData.barbero
        }
      })
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: response.data.msg,
        text: response.data.turno.worker,
        footer: response.data.turno.start,
        showConfirmButton: false,
        timer: 1500
      })
      console.log(response.data)
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

const initialState = {
    worker:{},
    dates: {},
    loading: false,
    error: null,
    message:null,
}

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {

  },
  extraReducers: {
    [newDate.pending]: (state) => {
      return{...state, loading: true}
    },
    [newDate.fulfilled]: (state, { payload }) => {
      return { ...state, dates: payload.turno, loading: false, message:payload.msg};
    },
    [newDate.rejected]: (state, { payload }) => {
 
      return { ...state, error: payload, loading: false, };
    },
  },
})

// Action creators are generated for each case reducer function
export const { } =  dateSlice.actions

export default  dateSlice.reducer