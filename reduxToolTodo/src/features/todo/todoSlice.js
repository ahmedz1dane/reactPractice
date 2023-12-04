import { createSlice, nanoid } from "@reduxjs/toolkit";
//nanoid generates unique id

// REDUCER :
// is a pure function responsible for handling state
// changes based on dispatched actions. It receives
// the current state and an action and returns the
// new state.

// SLICE :
//  is a concept introduced by Redux Toolkit that
// combines a piece of state, actions, and a reducer
// into a cohesive unit, making it easier to manage
// and organize related parts of the state and logic.

export const todoSlice = createSlice({
  name: "todo", //here the name is builtin , means we should use it itself
  initialState: {
    todos: [{ id: 1, text: "ffff" }], //DOUBT :{} why ?
  },
  reducers: {
    addTodo: (state, action) => {
      // STATE : variable , in this case initialState
      // ACTION :things provided to perform task on the function
      //         (parameters)
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo); // here todos is the initial state
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      // same functionality as we have seen in the previous project
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
// here in the above each functions or reducers are
// exported seperately because , from other components
// now we will be able to import these functions directly

export default todoSlice.reducer;
// DOUBT: why giving reducer instead of reducers
// ANS: there might be many func inside the reducers
//      part in the slice but it will be considered as
//      single
