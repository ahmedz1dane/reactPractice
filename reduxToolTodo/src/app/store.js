import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
// DOUBT :from where did i got the name todoReducer
// ANS: this name will be given to the default export
//      from that particular file(in a particular file
//      there will be only one default)
export const store = configureStore({
  reducer: {
    zidane: todoReducer,
  },
});
// here no need to give the name zidane ,
// refer hitesh(youtube) note to get small code
// here if there are multiple slices then we need to
// combine it with some further code . In that case
// we will be using some naming thing as I used here
// the name zidane to name the reducer todoReducer
