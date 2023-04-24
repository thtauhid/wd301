import React from "react";
import "./TaskCard.css";

interface TaskProps {
  title: string;
  description: string;
  dueDate: string;
}

class Task extends React.Component<TaskProps> {
  render() {
    return (
      <div className='border-2 border-stone-400 rounded p-3 m-2 TaskItem'>
        <h3 className='text-xl font-bold'>
          {this.props.title} ({this.props.dueDate})
        </h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Task;
