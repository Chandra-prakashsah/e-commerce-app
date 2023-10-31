
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchData } from '../../services/api';
// Define the initial state for the API data
  export interface IProduct {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
      count: number;
      rate: number;
    };
    title: string;
  }

interface IApiState {
  loading: boolean;
  data: IProduct[];
  error: string | null;
}

const initialState: IApiState = {
  loading: false,
  data: [],
  error: null,
};

export const getApiData=createAsyncThunk("api",async()=>{
   const res= await fetchData();
   return res;
})
// Create a slice using createSlice from Redux Toolkit
const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getApiData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getApiData.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getApiData.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message || 'Error occurred while fetching data.';
      });
  },
});

export default apiSlice.reducer;
