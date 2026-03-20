import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BannersResponse } from '../types/types';
import axios from 'axios';
import { getBanners } from '../API/API';

interface BannersState {
  banners: BannersResponse;
  loading: boolean;
  error: string | null;
}
const initialState: BannersState = {
  banners: [],
  loading: false,
  error: null,
};
export const getBannersThunk = createAsyncThunk<
  BannersResponse,
  void,
  { rejectValue: string }
>('banner/getBanners', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(getBanners());
    return response.data;
  } catch (error) {
    return rejectWithValue('Ошибка загрузки баннеров');
  }
});
const HeroBannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBannersThunk.fulfilled, (state, action) => {
        state.banners = action.payload;
        state.loading = false;
      })
      .addCase(getBannersThunk.pending, state => {
        state.loading = true;
      })
      .addCase(getBannersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Произошла ошибка';
      });
  },
});

export default HeroBannerSlice.reducer;
