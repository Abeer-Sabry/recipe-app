import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getGeneralRecipes = createAsyncThunk("generalrecipes/getGeneralRecipes", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      // `https://api.spoonacular.com/recipes?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await res.json();
    console.log("api response", data);
    return data.recipes;
  } catch (error) {
    rejectWithValue(error.message);
  }
});

const generalSlice = createSlice({
  name: "generalrecipes",
  initialState: { loading: false, recipes: [] },
  reducers: {},
  extraReducers: {
    // request
    [getGeneralRecipes.pending]: (state, action) => {
      state.loading = true;
    },
    // success
    [getGeneralRecipes.fulfilled]: (state, action) => {
      state.loading = false;
      state.recipes = action.payload;
    },
    [getGeneralRecipes.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
  },
});

export default generalSlice.reducer;
