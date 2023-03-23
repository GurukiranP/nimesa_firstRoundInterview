import { configureStore, combineReducers } from "@reduxjs/toolkit";
import homeSliceReducer from "../components/Home/homeSlice";

const combinedReducer = combineReducers({
  home: homeSliceReducer
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer
});
