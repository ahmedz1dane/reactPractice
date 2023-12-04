// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeTodo, updateTodo } from "../features/todo/todoSlice";
// import { useState } from "react";

// function Todos() {
//   const todos = useSelector((state) => state.zidane.todos);
//   const [todoMsg, setTodoMsg] = useState();

//   // DOUBT :
//   // ANS:Here state will access the store. then zidane
//   //     will access the reducer todoReducer. this will
//   //     containing the reducers of the slice todoSlice
//   //     .todos will help us to access the todos state
//   //     that is involved in the reducer zidane

//   const dispatch = useDispatch();

//   const [isTodoEditable, setIsTodoEditable] = useState(false);
//   return (
//     <>
//       <ul className="list-none">
//         {todos.map((todo) => (
//           <li
//             className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
//             key={todo.id}
//           >
//             <input
//               key={todo.id}
//               type="text"
//               className={`border outline-none w-full bg-transparent rounded-lg ${
//                 isTodoEditable ? "border-black/10 px-2" : "border-transparent"
//               }`}
//               value={isTodoEditable ? todoMsg : todo.text}
//               onChange={(e) => setTodoMsg(e.target.value)}
//               readOnly={!isTodoEditable}
//             />
//             <button
//               key={todo.id}
//               className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
//               onClick={() => {
//                 if (isTodoEditable) {
//                   dispatch(updateTodo({ id: todo.id, text: todoMsg }));
//                   setIsTodoEditable(false);
//                   setUpdatedText(""); // Reset updated text state after dispatch
//                 } else setIsTodoEditable((prev) => !prev);
//               }}
//             >
//               {isTodoEditable ? "📁" : "✏️"}
//             </button>
//             <button
//               onClick={() => dispatch(removeTodo(todo.id))}
//               className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                 />
//               </svg>
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default Todos;

// DOUBT : why the above code is not used
// ANS: if we run the above code we can see that when we press
//      edit button all the edit icon will change because when
//      we see that we had used the isEditable and toMsg state
//      outside the map func , therefore we are sharing same state
//      for all todos
//      to avoid that we need to provide different state to different
//      todo as we have done in the following code
//      when we compare our previous code with the prevous project
//      code we can see that , the above mentioned states are inside
//      the map that is used in the main.jsx of that project

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { useState } from "react";

function Todos() {
  const todos = useSelector((state) => state.zidane.todos);
  const dispatch = useDispatch();

  // Use an object to store todo message states, where each key represents a todo ID
  const [todoMsgs, setTodoMsgs] = useState({});

  const handleInputChange = (id, value) => {
    setTodoMsgs({ ...todoMsgs, [id]: value }); // Update the corresponding todo's message
  };

  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <>
            {todo.id == 1 ? (
              ""
            ) : (
              <li
                className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                key={todo.id}
              >
                <input
                  type="text"
                  className={`border outline-none w-full bg-transparent rounded-lg ${
                    todoMsgs[todo.id]
                      ? "border-black/10 px-2"
                      : "border-transparent"
                  }`}
                  value={todoMsgs[todo.id] || todo.text}
                  onChange={(e) => handleInputChange(todo.id, e.target.value)}
                  // DOUBT : How the rendering happens here and the change
                  //         is displayed
                  // ANS: render1 , check if there is anything in todoMsgs[todo.id]
                  //      if nothing is there todo.text is displayed
                  //      when onchange ocuurs it causes a change in the todoMsgs
                  //      there we know that useState is used , therefore the re-render
                  //      occur , therefore again the control will reach the value
                  //      and this time  todoMsgs[todo.id] contains value , so it
                  //      gets displayed
                  readOnly={!todoMsgs[todo.id]}
                />
                <button
                  className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 mr-1.5 pr-7 pl-7 pt-4 pb-4"
                  onClick={() => {
                    if (todoMsgs[todo.id]) {
                      dispatch(
                        updateTodo({ id: todo.id, text: todoMsgs[todo.id] })
                      );
                      setTodoMsgs({ ...todoMsgs, [todo.id]: "" }); // Reset the specific todo's message state after dispatch
                    } else {
                      setTodoMsgs({ ...todoMsgs, [todo.id]: todo.text });
                    }
                  }}
                >
                  {todoMsgs[todo.id] ? "📁" : "✏️"}
                </button>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </li>
            )}
          </>
        ))}
      </ul>
    </>
  );
}

export default Todos;
