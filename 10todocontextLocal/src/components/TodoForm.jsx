import React from "react";
import { useToDo } from "../contexts";
import { useState } from "react";

function TodoForm() {
  const [todo, setTodo] = useState(""); // Single Todo
  const { addTodo } = useToDo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo: todo, completed: false });
    // DOUBT : why an object is passed instead of jst
    //         passing todo because its like that in app.jsx
    // ANS: Because, in the line 5 we can see that we are
    //      declaring todo as a string here , whereas in case
    //      of app.jsx the function addTodo is expecting an
    //      object . that is the reason behind it

    setTodo("");
    // to make it empty again
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
      {/* Here we doesnt need to add any fuctionality
      to the button since its type is submit and we have
      added onSubmit in the form tag  */}
    </form>
  );
}

export default TodoForm;
