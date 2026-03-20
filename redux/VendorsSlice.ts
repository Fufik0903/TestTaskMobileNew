import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BannersResponse } from '../types/types';
import axios from 'axios';
import { getVendorsList } from '../API/API';

interface VendorsState {
  vendorsList: BannersResponse;
  loading: boolean;
  error: string | null;
}
const initialState: VendorsState = {
  vendorsList: [],
  loading: false,
  error: null,
};
export const getVendorsListThunk = createAsyncThunk<
  BannersResponse,
  void,
  { rejectValue: string }
>('bottomSheet/getVendorsList', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(getVendorsList());
    return response.data;
  } catch (error) {
    return rejectWithValue('Ошибка загрузки ресторанов');
  }
});
const VendorsSlice = createSlice({
  name: 'bottomSheet',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getVendorsListThunk.fulfilled, (state, action) => {
        state.vendorsList = action.payload?.data;
      })
      .addCase(getVendorsListThunk.pending, state => {
        state.loading = true;
      })
      .addCase(getVendorsListThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Произошла ошибка';
      });
  },
});

export default VendorsSlice.reducer;
