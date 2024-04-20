import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampervan } from '../Api/api.js';

const getCampervanThunk = createAsyncThunk(
  'api/campervan',
  async (params, thunkApi) => {
    try {
      const data = await getCampervan(params);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

const campervanApi = { getCampervanThunk };

export default campervanApi;
