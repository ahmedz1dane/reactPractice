import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Message",
      completed: false,
    },
  ],

  // following are the functions invloved in our project
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {}, // function to update Todo it requires id of the todo that we need to update and also a todo that we need to update
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useToDo = () => {
  return useContext(ToDoContext);
};

export const Todoprovider = ToDoContext.Provider;
