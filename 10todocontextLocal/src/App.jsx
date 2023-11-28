import { useState } from "react";
import "./App.css";
import { Todoprovider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]); // here [] is used to create a new array
    // in the above line if we add setTodos(todo)
    // all the previous values in the todos will be removed
    // we dont want that , thats the reason behind the code
    // that we have used above

    // in the above code we caan see that , we are using
    // some function inside setTodos and this function  is
    // taking prev as a parameter which is actually
    // the previous values of todos
    // "..." is called spread operator , which is
    // actually used to combine objects or arrays
    // or arrays and objects with some new values
    // similary it have many functions
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
    // in this we can see that
    // prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)):
    // in the above mentioned line prev is the previous array
    // and prevTodo is each objects in the prev
    // in the above line we can see that we are mapping
    // through each objects of the prev and checking
    // whether the id of that object is equal to the
    // id that we pass as the parameter , if it is equal
    // then todo(which is passed as the parameter) is
    // returned other wise prevTodo is returned
    // eventually we can see that an array is formed
    // This array will be the updated one
    // this new array will be returned to setTodos
    // and thus the the new array will be given to todos
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    // to understand the working of the function refer the
    // commennd of the above function
    // the slight difference in this code is that
    // here filter is used in this code
    // here todo is the object inside the prev
    // since we are deleting here we need to remove
    // that particular todo from the prev
    // so by using filter we are acheiving that .
    // here the id of the to will be checked with the
    // passed id and only todo with id that is not equal
    // to the id that is passed is returned
  };

  const toggleComplete = (id) => {
    setTodos(
      (prev) =>
        prev.map((prevTodo) =>
          prevTodo === id
            ? { ...prevTodo, completed: !prevTodo.completed }
            : prevTodo
        )
      // DOUBT : does new variable named completed is added to
      //         prevTodo or the existing one is updated :
      // ANS   : ...arrayName will create the shallow copy of it
      //         if we pass an array with it like as we passed in
      //         in the line 9 , there we can see that [{},...prev]
      //         in that case those will be combined
      //         but we need to update some variable in the object
      //         as we done in the line 64 we can do like that
      //         then it will update that particular variable in that
      //         object
    );
  };

  return (
    <Todoprovider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>{" "}
    </Todoprovider>
  );
}

export default App;
