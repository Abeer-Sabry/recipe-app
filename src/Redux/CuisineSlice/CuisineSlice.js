import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCuisine = createAsyncThunk("cuisine/getCuisine", async (name, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&cuisine=${name}`
    );
    const data = await res.json();
    console.log("api response", data.results);
    return data.results;
  } catch (error) {
    rejectWithValue(error.message);
  }
});

const cuisineSlice = createSlice({
  name: "cuisine",
  initialState: { loading: false, cuisines: [] },
  reducers: {},
  extraReducers: {
    // request
    [getCuisine.pending]: (state, action) => {
      state.loading = true;
    },
    // success
    [getCuisine.fulfilled]: (state, action) => {
      state.loading = false;
      state.cuisines = action.payload;
    },
    [getCuisine.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
  },
});

export default cuisineSlice.reducer;
