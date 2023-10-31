import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const base_url="https://fakestoreapi.com/products";

export const fetchData =  async () => {
    const response = await axios.get(base_url);
    return response.data;
  };