import React from "react";

const TaskCard = (props) => {
  return (
    <div className='border-2 border-stone-400 rounded p-3 m-2 TaskItem'>
      <h2 className='text-xl font-bold'>{props.title}</h2>
      {
        // If the task is completed, show the completed date else show the due date
        props.completedAtDate ? (
          <p>Completed on: {props.completedAtDate}</p>
        ) : (
          <p>Due on: {props.dueDate}</p>
        )
      }
      <p>Assignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;
