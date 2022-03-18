import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getVeggie = createAsyncThunk("veggie/getVeggie ", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
    );
    const data = await res.json();
    console.log("veggie response", data);
    return data.recipes;
  } catch (error) {
    rejectWithValue(error.message);
  }
});

const VeggieSlice = createSlice({
  name: "veggie",
  initialState: { loading: false, Veggies: [] },
  reducers: {},
  extraReducers: {
    // request
    [getVeggie.pending]: state => {
      state.loading = true;
    },
    // success
    [getVeggie.fulfilled]: (state, action) => {
      state.loading = false;
      state.Veggies = action.payload;
    },
    [getVeggie.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
  },
});

export default VeggieSlice.reducer;
