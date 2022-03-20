import { configureStore } from "@reduxjs/toolkit";
// REDUCERS
import general from "./GeneralSlice/generalSlice";
import Veggie from "./VeggieSlice/VeggieSlice";
import cuisine from "./CuisineSlice/CuisineSlice";
import search from "./SearchSlice/SearchSlice";

const store = configureStore({
  reducer: {
    general,
    Veggie,
    cuisine,
    search,
  },
});
export default store;
