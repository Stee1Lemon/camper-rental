import { createSlice } from '@reduxjs/toolkit';
import campervanApi from './rootOperations.js';
import { handleCampervans } from './handlers.js';

export const initialState = {
  isLoading: false,
  error: '',
  favorite: [],
  campervans: [],
};

export const campervanSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    toggleFavorite(state, { payload }) {
      const favoriteIndex = state.favorite.findIndex(
        (item) => item._id === payload._id
      );

      if (favoriteIndex !== -1) {
        state.favorite.splice(favoriteIndex, 1);
      } else {
        state.favorite.push(payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(campervanApi.getCampervanThunk.fulfilled, handleCampervans)
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const campervanReducer = campervanSlice.reducer;
