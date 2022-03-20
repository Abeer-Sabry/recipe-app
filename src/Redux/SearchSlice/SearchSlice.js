import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSearchQuery = createAsyncThunk("searched/getSearchQuery", async (name, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&query=${name}`
    );
    const data = await res.json();
    console.log("api response", data.results);
    return data.results;
  } catch (error) {
    rejectWithValue(error.message);
  }
});

const searchSlice = createSlice({
  name: "searched",
  initialState: { loading: false, Queries: [] },
  reducers: {},
  extraReducers: {
    // request
    [getSearchQuery.pending]: state => {
      state.loading = true;
    },
    // success
    [getSearchQuery.fulfilled]: (state, action) => {
      state.loading = false;
      state.Queries = action.payload;
    },
    [getSearchQuery.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
  },
});

export default searchSlice.reducer;
