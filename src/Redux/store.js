import { configureStore } from "@reduxjs/toolkit";
import general from "./GeneralSlice/generalSlice";
import Veggie from "./VeggieSlice/VeggieSlice";
const store = configureStore({
  reducer: {
    general,
    Veggie,
  },
});
export default store;
