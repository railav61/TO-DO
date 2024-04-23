import { IoClose } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { useState } from "react";

function Card({ task, deletetask, completehandler }) {
  const [readmore, setReadmore] = useState(false);
  let info1 = task.text;
  const sliced = (start, end) => {
    return info1.slice(start, end);
  };
  info1 = `${sliced(0, 50)}`;
  const desc = readmore ? task.text : info1;
  function readmorehandler() {
    setReadmore(!readmore);
  }
  return (
    <div className="flex flex-wrap relative h-40 w-36 sm:h-52 sm:w-52 border-[3px] border-violet-400 rounded-xl shadow-4x bg-slate-500">
      <button
        onClick={() => deletetask(task.id)}
        className="flex items-center justify-center absolute top-1 left-1 w-4 h-4 rounded-full bg-red-500"
      >
        <IoClose />
      </button>
      <button
        onClick={() => completehandler(task.id)}
        className="flex items-center justify-center absolute top-1 left-6 w-4 h-4 rounded-full bg-green-500"
      >
        <MdDone />
      </button>
      <div className="flex justify-center">
        <div
          className={`mx-3 w-28 h-32 mt-7 text-white sm:w-44 sm:h-40 italic font-medium break-words ${
            task.completed ? "line-through" : "none"
          }`}
          style={{
            overflowY: "scroll", // Enable vertical scrollbar
            WebkitOverflowScrolling: "touch", // Smooth scrolling for WebKit browsers
            scrollbarWidth: "none", // Firefox
            MsOverflowStyle: "none", // Internet Explorer and Edge
          }}
        >
          {desc}
          <span
            onClick={readmorehandler}
            className="cursor-pointer text-sm text-violet-400 font-medium"
          >
            {readmore ? `. Show Less` : `....Read More`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
