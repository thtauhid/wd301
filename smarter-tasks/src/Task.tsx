import React from "react";
import "./TaskCard.css";
import { TaskItem } from "./types";

const Task = (props: TaskItem) => {
  return (
    <div className='border-2 border-stone-400 rounded p-3 m-2 TaskItem'>
      <h3 className='text-xl font-bold'>
        {props.title} ({props.dueDate})
      </h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Task;
