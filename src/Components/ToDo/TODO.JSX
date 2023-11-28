// import { useState } from "react";
// import "./App.css";
// // import TODOS from "./TODOS";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");
//   const [isEdit, setEdit] = useState(false);
//   const [inEdit, setInEdit] = useState(true);
// //   const [id, setId] = useState(0);

//   const handleInput = (e) => {
//     setInput(e.target.value);
//   };

//   const addTodo = () => {
//     if (input) {
//       setTodos([...todos, input]);
//       setInput("");
//     } else {
//       alert("Insert Your Task");
//     }
//   };

//   const deleteTodo = (id) => {
//     // console.log(id);
//     const filteredTodo = todos.filter((todo, index) => index !== id);
//     setTodos(filteredTodo);
//   };

//   const editTodo = (id) => {
//     const findTodo = todos.find((todo, index) => index === id);
//     setInput([findTodo]);
//     // setId(id);
//     setEdit(true);
//     setInEdit(false);
//   };

//   const updateTodo = () => {
//     // todos[id] = input;
//     setInput("");
//     // console.log(id)
//     setEdit(false);
//   };

//   const inputTodo = () => {
//     setInEdit(true);
//   };
  
//   return (
//     <>
//       <div className="flex justify-center items-center bg-gray-300 min-h-screen">
//         <div className="h-auto md:w-1/2 px-2 w-96 bg-white rounded-lg">
//           <div className="input_text relative">
//             <input
//               className="text-sm h-12 w-full my-4 pr-20 md:pr-28 outline-none pl-8"
//               value={input}
//               onChange={handleInput}
//               type="text"
//               placeholder="Write a new task"
//             />
//             <button
//               onClick={isEdit ? updateTodo : addTodo}
//               className="add_task text-sm transition-all hover:bg-blue-700 cursor-pointer text-white bg-blue-400 rounded-lg h-10 w-16 md:w-24 absolute right-1 top-[20px]"
//             >
//               {isEdit ? "Update Task" : "Add task"}
//             </button>
//             <i className="absolute top-[27px] text-gray-600 text-xl left-2 fa fa-pencil-square"></i>
//           </div>
//           <ul className="all_tasks">
//             {todos.map((elem, index) => (
//               <li key={index}>
//                 <hr className="mt-2" />
//                 <div className="my-4 flex justify-between px-1">
//                   <div className="flex items-center gap-2">
//                     <span className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full ">
//                       <i
//                         id="checked1"
//                         className="transition-all hover:text-lg text-blue-500 hover:text-blue-900 fa fa-check"
//                       ></i>
//                     </span>
//                     <p className="md:max-w-[375px] truncate max-w-[280px] ">
//                       <strike
//                         id="strike1"
//                         className="text-gray-600 text-sm no-underline "
//                       >
//                         {inEdit ? (
//                           elem
//                         ) : (
//                           <input
//                             id="updateTodo"
//                             type="text"
//                           />
//                         )}
//                       </strike>
//                     </p>
//                   </div>
//                   <span className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full ">
//                     <i
//                       onClick={() =>
//                         inEdit ? editTodo(index) : () => inputTodo()
//                       }
//                       className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-edit"
//                     ></i>
//                   </span>
//                   <span className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full ">
//                     <i
//                       onClick={() => deleteTodo(index)}
//                       className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-trash"
//                     ></i>
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
