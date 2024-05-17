import "./App.css";
import Cards from "./components/Cards";
import React, { useState, useEffect } from "react";
import { GoPlusCircle } from "react-icons/go";

function App() {
  const [task, settask] = useState(() => {
    const savedTodos = localStorage.getItem("task");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  let newitem = "";

  function addnewtask(event) {
    newitem = event.target.value;
  }

  function submitted(event) {
    if (newitem.trim() !== "") {
      settask([...task, { id: Date.now(), text: newitem, completed: false }]);
    }
    newitem = "";
    event.preventDefault();
  }

  function deletetask(id) {
    settask(task.filter((todo) => todo.id !== id));
  }

  function completehandler(id) {
    settask(
      task.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 sm:min-h-screen">
      <h1 className="text-xl sm:text-4xl font-medium text-violet-400 mt-5">
        TODO
      </h1>
      <Cards
        tasks={task}
        deletetask={deletetask}
        completehandler={completehandler}
      />
      <form onSubmit={submitted} className="bottom-5 flex items-center my-10">
        <textarea
          name="task"
          onChange={addnewtask}
          className="w-[260px] fixed h-8 px-2 sm:px-3 sm:py-4 border-[3px] border-violet-400 rounded-3xl sm:w-[600px] sm:h-16"
          style={{
            overflowY: "scroll", // Enable vertical scrollbar
            WebkitOverflowScrolling: "touch", // Smooth scrolling for WebKit browsers
            scrollbarWidth: "none", // Firefox
            MsOverflowStyle: "none", // Internet Explorer and Edge
          }}
        ></textarea>
        <button className="ml-3">
          <GoPlusCircle className="text-violet-400 text-4xl sm:text-6xl" />
        </button>
      </form>
    </div>
  );
}
export default App;
