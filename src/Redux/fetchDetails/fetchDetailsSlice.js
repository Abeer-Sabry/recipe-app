import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDetails = createAsyncThunk("recipeDetails/getDetails", async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await res.json();
    console.log("api response", data);
    return data;
  } catch (error) {
    rejectWithValue(error.message);
  }
});

const detailsSlice = createSlice({
  name: "recipeDetails",
  initialState: { loading: false, recipe: {} },
  reducers: {},
  extraReducers: {
    // request
    [getDetails.pending]: state => {
      state.loading = true;
    },
    // success
    [getDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.recipe = action.payload;
    },
    // reject
    [getDetails.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
  },
});

export default detailsSlice.reducer;
